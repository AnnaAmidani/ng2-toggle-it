export class Feature {

    key: string;
    enabled: boolean;
    description: string;
    creation: Date;

    constructor( key: string, enabled: boolean, description: string, creation: Date ) {
      this.key = key;
      this.enabled = enabled;
      this.description = description;
      this.creation = creation;
    }


    setKey(key: string): void {
        this.key = key;
    }

    getKey(): string {
        return this.key;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getDescription(): string {
        return this.description;
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
