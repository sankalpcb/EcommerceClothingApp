package org.example.Service;

import org.example.Model.Category;
import org.example.Model.Product;
import org.example.Repository.CategoryRepository;
import org.example.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepo;
@Autowired
    ProductRepository productRepository;
    public Category saveCategory(Category category) {

       return  categoryRepo.save(category);
    }
public Category link(Category category, List<Product>products){
    for (Product product : products) {
        product.setCategory(category);
        productRepository.save(product);
    }

    return category;
}
    public void deleteCategoryById(int id) {
        categoryRepo.deleteById(id);
    }

    public List<Category> findAllCategories() {
        return categoryRepo.findAll();
    }

    public Category findCategoryById(int id) {
        return categoryRepo.findById(id).get();
    }




}
