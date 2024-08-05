import { SetMetadata,Param } from "@nestjs/common";

export enum Role {
    ADMIN = "admin",
    USER = "user"
}



const ROLE_BASE = "role_base"

export const RoleAllowed = (roles: Role[]) => SetMetadata(ROLE_BASE, roles);