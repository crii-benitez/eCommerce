# eCommerce
TP para PWI_UTN en el que se nos pidió lo siguiente:

Para comenzar con la actividad se deben formar grupos de 3 o 4 personas.
Actividad SQL:
Crear una base de datos llamada ecommerce con una codificación utf spanish.
Esta base de datos tiene como objetivo englobar las entidad generales que tiene un
ecommerce básico.
Entidades del proceso
1. usuarios
2. productos
3. productos_imagenes
4. categorias
5. compra
6. compra_producto
7. provincia
8. estado_pago
9. direccion_envio
a. Para todas estas tablas hacer el DER teniendo en cuenta el tipo de relación entre las
tablas
b. Una vez definido el DER se debe crear la base de datos en phpmyadmin / mysql
workbench y se deben crear todas las tablas diagramadas con sus correspondientes
relaciones
c. Como paso final, cargar datos demo en todas las tablas y que guarden relación con
los datos de sus tablas relacionadas.
Importante :
Todas las tablas deben tener ts_create y ts_update como campos por defecto con valores
automáticos para su valor TIMESTAMP.
La tabla estado_pago es una normalización que se le aplica a la tabla compra para poder
escalar los estados de pago (aprobado, pendiente, rechazado, devolución, etc)
La tabla compra_producto es una tabla intermedia entre la tabla productos y la tabla compra
Una compra puede estar asociada a N productos.
Por otra parte, cuando se realiza una compra se le asocia una dirección de envío y esta
debe estar guardada en una entidad distinta a la entidad compra.
Actividad Node:
En base al modelo de datos generado en la actividad I, generar archivos JS que contengan
información estática.
Ejemplos:
usuarios.js
const usuarios = [
{id : 1,nombre:’franco’,apellido:’di leo’,mail : ‘ dileo.francoj@gmail.com ’,
password:’1234’, etc}
]
module.exports = usuarios;
productos.js
const productos = [
{
id : 1,
idCategoria : 1,
nombre : ‘Remera’,
descripcion : ‘La mejor remera del mundo entero’
habilitado : 1,
eliminado : 0,
ts_create , etc
}
]
module.exports = productos
Y asi con cada entidad que este creada en su modelo de datos.
Generar las vistas de :
productos
producto (vista individual recibiendo parametro)
login
registro
compras
● compras es una subruta dentro de /admin y su objetivo es que pueda ver todas las
compras en formato tabla de todos los usuarios que compraron en la plataforma
○ host:puerto/admin/compras
○ host:puerto/admin/compras/1
