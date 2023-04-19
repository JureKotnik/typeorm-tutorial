import { MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1615662519737 implements MigrationInterface{
    name = 'UserMigration1615662519737'

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.query('CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCRREMENT NOT NULL)');
    }
    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.query('DROP TABLE "user")');
    }
}