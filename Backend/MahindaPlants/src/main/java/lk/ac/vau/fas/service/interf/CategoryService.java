package lk.ac.vau.fas.service.interf;

import lk.ac.vau.fas.dto.CategoryDto;
import lk.ac.vau.fas.dto.Response;

public interface CategoryService {

	Response createCategory(CategoryDto categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long categoryId);
    Response deleteCategory(Long categoryId);
}

