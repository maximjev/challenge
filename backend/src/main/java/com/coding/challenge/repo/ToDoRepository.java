package com.coding.challenge.repo;

import com.coding.challenge.domain.ToDoItem;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.coding.challenge.db.tables.Todo.TODO;

@Repository
public class ToDoRepository {

    private DSLContext defaultDSLContext;

    @Autowired
    public ToDoRepository(DSLContext defaultDSLContext) {
        this.defaultDSLContext = defaultDSLContext;
    }

    public List<ToDoItem> getAll(Boolean archived) {
        return defaultDSLContext
                .selectFrom(TODO)
                .where(TODO.ARCHIVED.eq(archived))
                .fetch()
                .into(ToDoItem.class);
    }

    public Optional<ToDoItem> getById(Integer id) {
        return Optional.of(defaultDSLContext
                .selectFrom(TODO)
                .where(TODO.ID.eq(id))
                .fetchOne()
                .into(ToDoItem.class));
    }

    public void insert(ToDoItem item) {
        defaultDSLContext
                .insertInto(TODO)
                .columns(TODO.DESCRIPTION)
                .values(item.getDescription());
    }

    public void update(ToDoItem item) {
        defaultDSLContext
                .update(TODO)
                .set(TODO.ARCHIVED, item.isArchived())
                .set(TODO.DESCRIPTION, item.getDescription())
                .where(TODO.ID.eq(item.getId()));
    }
}
