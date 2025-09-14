ARQUITECTURA DEL PROYECTO

FRONTEND 
  
  Desarrollado con React.js.
  
  Se comunica con el backend a través de API REST.
  
     Se encarga de mostrar: 
     
     Catálogo de productos.

     Carrito de compras.
     
     Procesamiento de pedidos.
     
     Panel administrativo para gestionar productos, usuarios y ventas.

BACKEND 
  
  Implementado con Node.js + Express.js.
  
  Expone endpoints REST para el frontend.
    
    Se encarga de:
      
      Autenticación y autorización (JWT).
     
      Gestión de usuarios, productos, pedidos.
     
      Validaciones de datos.
     
      Conexión con la base de datos.
      
      Integración con pasarela de pagos (Stripe / PayPal / MercadoPago).

BASE DE DATOS 

  PostgreSQL 
  
  Modelos principales:
  
    Usuarios (clientes, administradores).
    
    Productos (stock, precios, categorías).
    
    Pedidos (estado, cliente, detalle).
    
    Pagos (método, monto, estado).


LIBRERIAS UTILIZADAS

 FRONTEND (React)
 
    React Router DOM → navegación entre páginas.
    
    Axios → consumo de la API.
    
    TailwindCSS → diseño responsivo y moderno.
    
    React Icons → íconos rápidos.
    
    React Hook Form / Formik → validación de formularios.

    
 BACKEND (Node.js + Express)
 
    Express.js → framework principal del servidor.
    
    Sequelize / Prisma → ORM para interactuar con PostgreSQL.
    
    JWT (jsonwebtoken) → autenticación segura.
    
    bcryptjs → encriptación de contraseñas.
    
    Multer → subida de imágenes de productos.
    
    Cors → manejo de políticas de acceso.
    
    Dotenv → variables de entorno (configuración segura).
    

TECNOLOGIAS UTILIZADAS


 FRONTEND
 
   React.js

   HTML5, CSS3, JavaScript (ES6+)
   
   TailwindCSS / Bootstrap

   

 BACKEND
 
   Node.js
   
   Express.js


 BASE DE DATOS
 
   PostgreSQL 

   
 
 OTROS
 
   Git + GitHub (control de versiones).
   
   Vercel (despliegue frontend).
   
   Render / AWS (despliegue backend).
   
   Stripe / PayPal / MercadoPago (pagos).

