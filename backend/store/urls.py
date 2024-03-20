from rest_framework import routers, viewsets

from store.models import Book, Category, Magazines
from store.serializers import BookSerializer, CategorySerializer, MagazineSerializer

class BookViewSet(viewsets.ModelViewSet):
  queryset = Book.objects.all()
  serializer_class = BookSerializer
  
class MagazineViewSet(viewsets.ModelViewSet):
  queryset = Magazines.objects.all()
  serializer_class = MagazineSerializer
  
class CategoryViewSet(viewsets.ModelViewSet):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  
router = routers.DefaultRouter()
router.register(r'books', BookViewSet, basename = 'book')
router.register(r'magazines', MagazineViewSet, basename = 'magazines')
router.register(r'categories', CategoryViewSet, basename = 'categories')

urlpatterns = router.urls
