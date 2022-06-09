export const productRowTemplate = `
       <tr>
         <td>{date}</td>
          <td>{orderId}</td>
          <td class="name-cell">{name}</td>
          <td class="price-cell">{price}</td>           
         <td class="action-cell">
            <button class="edit-button">edit</button>
            <button class="delete-button">delete</button>
         </td>
        </tr>
`
