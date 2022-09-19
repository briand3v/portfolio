import React from 'react'
import { Box } from '../box'

type ProjectSectionProps = {
    project: any,
    mockup: string,
    revert: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, mockup, revert }) => {
    return (
        <div className={"project-section-container " + (revert ? 'container-revert' : '')}>
            <div className="project-section-left">
                <Box mockup={mockup} revert={revert} />
            </div>
            <div className="project-section-right">
                <div className="project-section-right-title-project">
                    <span className={"project-section-right-title-project-app " + mockup}>{project.name}</span>
                    <span className="project-section-right-title-project-app-type">{project.type}</span>
                </div>
                <div className="project-section-right-title-project-description">
                    {project.description}
                </div>
                <div className="project-section-right-title-project-button">
                    <a className="button-link" href={project.link} target="_blank">
                        See more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection