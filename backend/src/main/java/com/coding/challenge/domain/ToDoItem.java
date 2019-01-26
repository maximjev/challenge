package com.coding.challenge.domain;

import java.time.LocalDateTime;

public class ToDoItem {
    private Integer id;
    private String description;
    private boolean archived;
    private LocalDateTime createdOn;

    public ToDoItem(String description) {
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }
}
