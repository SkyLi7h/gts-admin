import { User } from './User';

export class Audit {
    auditId: number;
    typeAction: string;
    action: string;
    actionTime: number; 
    user: User;
}