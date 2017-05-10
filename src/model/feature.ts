export class Feature {

    key: string;
    enabled: boolean;
    creation: Date;


    setKey(key: string): void {
        this.key = key;
    }

    getKey(): string {
        return this.key;
    }

    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    getEnabled(): boolean {
        return this.enabled;
    }

    setCreation(creation: Date): void {
        this.creation = creation;
    }

    getCreation(): Date {
        return this.creation;
    }

}
