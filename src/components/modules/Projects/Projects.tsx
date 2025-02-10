import React from 'react';
import { dataProjects } from '@/common/constant/projects';
import ProjectItem from './ProjectItem';
import { BiRocket } from 'react-icons/bi';
import { SectionTitle } from '../SectionTitle';

const Projects: React.FC = async () => {
  return (
    <div className="">
      <SectionTitle title="Projects" icon={<BiRocket />} description={"I love open source and I have been contributing to different projects for the some time. Here is a list of projects that I have contributed to and authored."} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 auto-rows-[100px] grid-flow-dense">
          {dataProjects.map((item, index) => (
            <ProjectItem key={item.id} item={item} delay={index % 2 == 0 ? 0.25 : 0.5} />
          ))}
        </div>

        <div className="hidden">
          <div className="columns-1 lg:columns-2 gap-5">
            {dataProjects.map((item, index) => (
              <div key={item.id} className="break-inside-avoid mb-4">
                <ProjectItem key={index} item={item} delay={index % 2 == 0 ? 0.25 : 0.5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;