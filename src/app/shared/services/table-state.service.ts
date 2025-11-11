import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableStateService {
    private state: any = {};

    setState(state: any) {
        this.state = state;
    }

    getState(): any {
        return this.state;
    }

    clearState() {
        this.state = {};
    }
}