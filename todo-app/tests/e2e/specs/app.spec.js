describe('ToDo App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    });

    it('loads the application correctly and checks initial UI elements', () => {
        cy.get('.bg-image img').should('be.visible');
        cy.get('.todo__container').should('be.visible');
        cy.contains('h2', 'No tasks yet').should('be.visible');
        cy.get('button').contains('Add a new task').should('be.visible');
    });

    it('adds a new task and displays it in the list', () => {
        cy.get('button').contains('Add a new task').click({ force: true });

        cy.get('.todo-tasks li').not('.todo-task-add').should('have.length', 1);
        cy.get('.todo-tasks li').not('.todo-task-add').within(() => {
            cy.get('input[type="text"]').should('have.value', 'New Task 1 (you can change task by click)');
        });
    });

    it('toggles task completion status with custom checkbox', () => {
        cy.get('button').contains('Add a new task').click({ force: true });

        cy.get('.todo-tasks li').not('.todo-task-add').within(() => {
            cy.get('.taskCheckBox').check({ force: true });
        });

        cy.get('.todo-tasks li')
            .not('.todo-task-add')
            .should('have.class', 'completed');

        cy.get('.todo-tasks li')
            .not('.todo-task-add')
            .within(() => {
                cy.get('.taskCheckBox').should('be.checked');
            });
    });

    it('deletes a task from the list', () => {
        cy.get('button').contains('Add a new task').click({ force: true });

        cy.get('.todo-tasks li')
            .not('.todo-task-add')
            .within(() => {
                cy.get('button.taskDelete').click({ force: true });
            });

        cy.contains('h2', 'No tasks yet').should('be.visible');
    });

    it('displays "No tasks yet" message when there are no tasks', () => {
        cy.contains('h2', 'No tasks yet').should('be.visible');

        cy.get('button').contains('Add a new task').click({ force: true });
        cy.contains('h2', 'No tasks yet').should('not.exist');

        cy.get('.todo-tasks li').not('.todo-task-add').within(() => {
            cy.get('button').contains('✖').click({ force: true });
        });
        cy.contains('h2', 'No tasks yet').should('be.visible');
    });

    it('filters tasks based on status', () => {
        cy.get('button').contains('Add a new task').click({ force: true });
        cy.get('.todoTask').first().as('task1');

        cy.get('button').contains('Add a new task').click({ force: true });
        cy.get('.todoTask').eq(1).as('task2');

        cy.get('@task1').find('input[type="checkbox"]').check({ force: true });

        cy.contains('button', 'All').click({ force: true });
        cy.get('@task1').should('be.visible');
        cy.get('@task2').should('be.visible');

        cy.contains('button', 'Active').click({ force: true });
        cy.get('@task1').should('not.have.class', 'hidden');
        cy.get('@task2').should('be.visible');

        cy.contains('button', 'Completed').click({ force: true });
        cy.get('@task1').should('be.visible');
        cy.get('@task2').should('not.exist');
    });
});