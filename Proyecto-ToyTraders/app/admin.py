from django.contrib import admin
from .models import Genero, Producto

# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display = ['nombre','descripcion', 'precio', 'id_genero']
    list_editable = ['precio']
    search_fields = ['nombre']
    list_filter = ['id_genero']

admin.site.register(Genero)
admin.site.register(Producto, ProductoAdmin) 