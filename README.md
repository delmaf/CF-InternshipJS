React MERN aplication - ANDYS PIZZA internet store

------------------------------------------------BACKEND---------------------------------------------------------

On the Backend side we have nodejs Server - at the beginning models are created and populated with data.
Also we have some endpoints created with Express framework for frontend (get/post) request 
& implements some validators like checkEmail and others.

Our data we store in a non-realational DB - MONGODB( on cloud )for comunication with MONGODB we use moongoose
framework and do CRUD operation (Create, Read, Update, Delete)

In our DB collection we store user credentials especially password crypted with bcryptjs(protection for sql injection).
One more feature for more user friendly app is jsonwebtoken wich expires in 24h.

------------------------------------------------FRONTEND--------------------------------------------------

Fronted side we use React-DOM,redux,router-dom(routing) & others.Also we translate this app with i18next in 3 langugages RO/RU/EN. TailwindCSS / SCSS

