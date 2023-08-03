import fsPromises from 'fs/promises';
import path from 'path'
import { ProjectType } from "@/components/projects"


export async function getProjectsData() {
  const filePath : string = path.join(process.cwd(), "data/projects.json");
  const jsonData : Buffer = await fsPromises.readFile(filePath);
  const objectData : {title: string, projects: ProjectType[]}[] = JSON.parse(jsonData.toString());

  return objectData
}