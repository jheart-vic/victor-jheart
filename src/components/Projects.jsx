import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchProjects} from '../redux/projectSlice';
import Project from './Project';
import './Project.css';


const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projects);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <div>
      <div className='projects'>
       {projects.map(project => (
          <Project project={project} key={project.id} />
          ))}
      </div>   
    </div>
  )
}

export default Projects;
