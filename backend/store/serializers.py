from rest_framework import serializers

from store.models import Book, Category, Magazines

class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'


class MagazineSerializer(serializers.ModelSerializer):
  class Meta:
    model = Magazines
    fields = '__all__'
    depth = 1
