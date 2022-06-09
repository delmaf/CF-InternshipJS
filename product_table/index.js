import { productRowTemplate } from './tmpls.js'
import { getAllGoods, updateGood, addGood, deleteGood } from './utils/apiServer.js'
import { tplValuesReplacer } from './utils/parser.js'

const tbody = document.querySelector('.tbody')
const modal = document.querySelector('[data-modal]')
const addButton = document.querySelector('.add-button')
const submitForm = document.querySelector('.form')
const closeButton = document.querySelector('.close-button')
const dateContainer = document.querySelector('.date-container')
const input = document.querySelectorAll('input')

const modifiedDate = () => {
  const d = new Date()
  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  return `${month + 1}/${day}/${year}`
}

let newProduct = {
  date: modifiedDate(),
}

let index = -1

//---------------------------------Parse template-------------------------------------//

const mapDataToTpl = (arr, tpl) =>
  arr.map((product) => tplValuesReplacer(product, tpl))

//---------------------------------Draw table with products from SV-------------------------------------//

const renderTable = (goodsTableArr) => {
  tbody.innerHTML = [...mapDataToTpl(goodsTableArr, productRowTemplate)].join(
    ''
  )
}

//---------------------------------Handle popup-------------------------------------//

const toggleModal = () => {
  deleteValue()
  modal.classList.toggle('backdrop--hidden')
}

const closeModal = () => {
  toggleModal()
}

const onChange = (e) => {
  newProduct = {
    ...newProduct,
    [e.target.name]: e.target.value,
  }
  return newProduct
}

const deleteValue = () => {
  input.forEach((el) => (el.value = ''))
}

input.forEach((el) => {
  return el.addEventListener('input', onChange)
})

const formatProduct = (data) => {
  return data.map((obj) => ({
    ...obj,
    price: `${obj.price}.00$`,
    date: modifiedDate(),
  }))
}

//---------------------------------Fetch data from SV-------------------------------------//

getAllGoods()
  .then((data) => {
    const newData = formatProduct(data)
    renderTable(newData)
    return data
  })
  .then((data) => {
    const onhandleClick = (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return
      }

      if (e.target.className === 'delete-button') {
        index = [...document.querySelectorAll('.delete-button')].indexOf(
          e.target
        )
        const id = data[index].id
        deleteGood(id).then((data) => console.log(data))
      }

      if (e.target.className === 'edit-button') {
        toggleModal()
        dateContainer.innerHTML = modifiedDate()
        index = [...document.querySelectorAll('.edit-button')].indexOf(e.target)
        const product = data[index]
        input.forEach((el) => (el.value = product[el.name]))

        submitForm.addEventListener('submit', (event) => {
          event.preventDefault()
          const id = data[index].id
          updateGood(id, newProduct).then((data) => console.log(data))
        })
      }
    }

    tbody.addEventListener('click', (e) => onhandleClick(e))
    return data
  })
  .then((data) => {
    const sortButton = document.querySelectorAll('.sort-button')

//---------------------------------Sort table rows-------------------------------------//

    const onSortProduct = (e) => {
      let sortedData = []
      switch (e.target.dataset.sort) {
        case 'incr-name':
          sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name))
          break

        case 'desc-name':
          sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name))
          break

        case 'incr-price':
          sortedData = [...data].sort(
            (a, b) => Number(a.price) - Number(b.price)
          )
          break

        case 'desc-price':
          sortedData = [...data].sort(
            (a, b) => Number(b.price) - Number(a.price)
          )
          break

        default:
          sortedData = [...data]
      }
      const newSortedData = formatProduct(sortedData)
      renderTable(newSortedData)
    }

    sortButton.forEach((btn) => {
      btn.addEventListener('click', (e) => onSortProduct(e))
    })
  })

const submitNewProduct = (product) => {
  if (product.orderId && product.name && product.price) {
    addGood(product).then((data) => console.log(data))
  } else {
    alert('fill all cell of the table')
  }
}

const addNewProduct = (e) => {
  toggleModal()
  dateContainer.innerHTML = modifiedDate()
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault()
    submitNewProduct(newProduct)
  })
}

closeButton.addEventListener('click', closeModal)
addButton.addEventListener('click', addNewProduct)

