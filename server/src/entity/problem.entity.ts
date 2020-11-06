import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserProblemEntity from "./user-problem.entity";

@Entity("Problem")
export default class ProblemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  solvedAt!: Date;

  @OneToMany(() => UserProblemEntity, (userProblem) => userProblem.problem)
  userProblem?: UserProblemEntity[];
}
