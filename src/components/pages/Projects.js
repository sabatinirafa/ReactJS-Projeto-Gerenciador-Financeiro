import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layouts/Message"
import Container from '../layouts/Container'
import Loading from "../layouts/Loading"
import LinkButton from '../layouts/LinkButton'
import ProjectCard from "../project/ProjectCard"

import styles from './Projects.module.css'


function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)


  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto'/>      
      </div>
      {message && <Message type='success' msg={message}/>}
      <Container customClass='start'>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
            />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos</p>
          )}
      </Container>
    </div>
  )
}

export default Projects