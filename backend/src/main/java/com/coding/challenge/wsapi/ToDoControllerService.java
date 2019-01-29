package com.coding.challenge.wsapi;

import com.coding.challenge.domain.ToDoItem;
import com.coding.challenge.repo.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoControllerService {

    private ToDoRepository repository;

    @Autowired
    public ToDoControllerService(ToDoRepository repository) {
        this.repository = repository;
    }

    public List<ToDoItem> getAll(Boolean archived) {
        return repository.getAll(archived);
    }

    public void create(String description) {
        repository.insert(new ToDoItem(description));
    }

    public void archive(Integer id) {
        repository.getById(id).ifPresent(it -> {
            it.setArchived(true);
            repository.update(it);
        });
    }
}
