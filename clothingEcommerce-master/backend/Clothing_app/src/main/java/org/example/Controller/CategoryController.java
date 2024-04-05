package org.example.Controller;

import org.example.Model.Category;
import org.example.Model.Product;
import org.example.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="*",allowedHeaders = "*")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/link/{id}")
    public Category link(@PathVariable int id, @RequestBody List<Product> products){
        Category savedcategory= categoryService.link(categoryService.findCategoryById(id),products);
    return savedcategory;
    }
    @PostMapping("/add-category")
    public Category save(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    @GetMapping("/findbyid/{id}")
    public Category findbyid(@PathVariable int id) {
        return categoryService.findCategoryById(id);
    }


    @GetMapping("/findall")
    public List<Category> findAll() {
        return categoryService.findAllCategories();
    }

}