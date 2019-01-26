package com.coding.challenge.repo;

import com.coding.challenge.db.tables.Todo;
import com.coding.challenge.domain.ToDoItem;
import org.jooq.DSLContext;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ToDoRepository {

    private DSLContext defaultDSLContext;

    private ModelMapper modelMapper;

    @Autowired
    public ToDoRepository(DSLContext defaultDSLContext, ModelMapper modelMapper) {
        this.defaultDSLContext = defaultDSLContext;
        this.modelMapper = modelMapper;
    }

    public List<ToDoItem> getAll() {
        return defaultDSLContext
                .selectFrom(Todo.TODO)
                .fetch()
                .map(i -> modelMapper.map(i, ToDoItem.class));
    }

    public ToDoItem getById(Integer id) {
        return defaultDSLContext
                .selectFrom(Todo.TODO)
                .where(Todo.TODO.ID.eq(id))
                .fetchOne()
                .map(i -> modelMapper.map(i, ToDoItem.class));
    }

    public void insert(ToDoItem item) {
        defaultDSLContext
                .insertInto(Todo.TODO)
                .values(item.getDescription());
    }

    public void update(ToDoItem item) {
        defaultDSLContext
                .update(Todo.TODO)
                .set(Todo.TODO.ARCHIVED, item.isArchived())
                .set(Todo.TODO.DESCRIPTION, item.getDescription())
                .where(Todo.TODO.ID.eq(item.getId()));
    }
}
