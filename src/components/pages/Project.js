import styles from './Project.module.css'

import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import ProjectForm from '../project/ProjectForm'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Project() {

  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] =useState(false)

  useEffect(() => {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then((data) => {
      setProject(data)
    })
    .catch(err => console.log(err))
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function editPost() {
    
  }

  return(
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total do orçamento:</span> {project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm 
                    handleSubmit={editPost} 
                    btnText='Concluir edição' 
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading/>
      )}
    </>
  )
}

export default Project