import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Window } from "selenium-webdriver";

describe('06: services', () => {
    let component: TodosComponent;
    let service: TodoService;
    let todos: any[];

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
        todos = [
            { id: 1, title: 'a' },
            { id: 2, title: 'b' },
            { id: 3, title: 'c' }
        ];
    });

    it('should set todos property with the items returned from server', () => {
        spyOn(service, 'getTodos').and.callFake(() => {
            return Observable.from([todos]);
        });

        component.ngOnInit();

        expect(component.todos).toBe(todos);

    });

    it('should call the server to save the changes when new add is called', () => {
        let spy = spyOn(service, 'add').and.returnValues(Observable.empty());
        component.add();
        expect(spy).toHaveBeenCalled();
    });

    it('should call the server to save the changes when new add success called', () => {
        let todo = { id: 4, title: "d" };
        let spy = spyOn(service, 'add').and.returnValues(Observable.from([todo]));
        component.add();

        expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });

    it('should call the server to save the changes when new add error called', () => {
        let error = 'error from the server';
        let spy = spyOn(service, 'add').and.returnValues(Observable.throw(error));
        component.add();

        expect(component.message).toBe(error);
    });

    it('should call the server to delete', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });

    it('should Not call the server to delete', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).not.toHaveBeenCalled();
    });

});
