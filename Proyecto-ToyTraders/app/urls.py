from django.urls import path
from .views import pagprincipal, productos, producto, login, carrito, agregar_producto, listar_productos, modificar_producto, eliminar_producto

urlpatterns = [
    path('', pagprincipal, name='pagprincipal'),
    path('productos/', productos, name='productos'),
    path('producto/', producto, name='producto'),
    path('login/', login, name='login'),
    path('carrito/', carrito, name='carrito'),
    path('agregar-producto/', agregar_producto, name='agregar_producto'),
    path('listar-productos/', listar_productos, name='listar_productos'),
    path('modificar-producto/<id>/', modificar_producto, name='modificar_producto'),
    path('eliminar-producto/<id>/', eliminar_producto, name='eliminar_producto'),
]