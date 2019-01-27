package com.coding.challenge.mapper;

import com.coding.challenge.configuration.MappingConfiguration;
import com.coding.challenge.domain.ToDoItem;
import com.coding.challenge.wsapi.dto.ToDoDTO;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper(config = MappingConfiguration.class)
public interface ToDoMapper {

    ToDoDTO toDTO(ToDoItem item);
}
