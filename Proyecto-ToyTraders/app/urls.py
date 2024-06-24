from django.urls import path
from .views import pagprincipal, productos, producto, login, carrito

urlpatterns = [
    path('', pagprincipal, name='pagprincipal'),
    path('productos/', productos, name='productos'),
    path('producto/', producto, name='producto'),
    path('login/', login, name='login'),
    path('carrito/', carrito, name='carrito'),
]