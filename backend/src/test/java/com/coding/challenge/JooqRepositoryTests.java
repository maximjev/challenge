package com.coding.challenge;

import com.coding.challenge.db.tables.Todo;
import com.coding.challenge.domain.ToDoItem;
import com.coding.challenge.repo.ToDoRepository;
import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import org.jooq.impl.DSL;
import org.jooq.tools.jdbc.MockConnection;
import org.jooq.tools.jdbc.MockDataProvider;
import org.jooq.tools.jdbc.MockResult;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static java.sql.Timestamp.valueOf;
import static java.time.LocalDateTime.of;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JooqRepositoryTests {

    private ToDoRepository repository;

    private MockDataProvider initDataProvider() {
        return ctx -> {
            DSLContext create = DSL.using(SQLDialect.POSTGRES);
            MockResult[] mock = new MockResult[1];

            var result = create.newResult(
                    Todo.TODO.ID,
                    Todo.TODO.DESCRIPTION,
                    Todo.TODO.ARCHIVED,
                    Todo.TODO.CREATED_ON
            );

            result.add(create.newRecord(
                    Todo.TODO.ID,
                    Todo.TODO.DESCRIPTION,
                    Todo.TODO.ARCHIVED,
                    Todo.TODO.CREATED_ON
            ).values(
                    1,
                    "Mock description",
                    false,
                    valueOf(of(2019, 1, 21, 1, 1))
            ));

            mock[0] = new MockResult(1, result);
            System.out.println("MOCK: " + mock[0].toString());
            return mock;
        };
    }

    private DSLContext initContext(MockDataProvider provider) {
        return DSL.using(new MockConnection(provider), SQLDialect.POSTGRES);
    }

    @Before
    public void initRepository() {
        repository = new ToDoRepository(initContext(initDataProvider()));
    }

    @Test
    public void testGetAll() {
        ToDoItem result = repository.getAll().get(0);

        assertEquals(Integer.valueOf(1), result.getId());
        assertEquals("Mock description", result.getDescription());
        assertEquals(of(2019, 1, 21, 1, 1), result.getCreatedOn());
        assertFalse(result.isArchived());
    }

    @Test
    public void testGetById() {
        ToDoItem result = repository.getById(1).get();

        assertEquals(Integer.valueOf(1), result.getId());
        assertEquals("Mock description", result.getDescription());
        assertEquals(of(2019, 1, 21, 1, 1), result.getCreatedOn());
        assertFalse(result.isArchived());
    }
}
