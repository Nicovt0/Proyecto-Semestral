from django.urls import path
from .views import PagPrincipal, login, carrito, producto, productos

urlpatterns = [
    path('PagPrincipal/', PagPrincipal, name="PagPrincipal"),
    path('login/', login, name="login"),
    path('productos/', productos, name="productos"),
    path('producto/', producto, name="producto"),
    path('carrito/', carrito, name="carrito"),
]
