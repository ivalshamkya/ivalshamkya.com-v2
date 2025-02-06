import React from 'react';
import { dataProjects } from '@/common/constant/projects';
import ProjectItem from './ProjectItem';

const MasonryGrid: React.FC = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1.5 auto-rows-[100px] grid-flow-dense">
          {dataProjects.map(item => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </div>

        <div className="hidden">
          <div className="columns-1 lg:columns-2 gap-1">
            {dataProjects.map(item => (
              <div key={item.id} className="break-inside-avoid mb-4">
                <ProjectItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;