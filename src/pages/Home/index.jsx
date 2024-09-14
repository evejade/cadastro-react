import './style.css'

export default function Home() {

  const users = [{
    id: '3t3te3v6756',
    name: 'joao',
    age: 33,
    email: 'joao@email.com'
  }, {
    id: 'qwertyui',
    name: 'Aline',
    age: 26,
    email: 'aline@email.com'
  }, {
    id: '3cvbnm876',
    name: 'pedro',
    age: 33,
    email: 'pedr@email.com'
  }]
  return (
    <>
      <div className='container'>
        <form action="">
          <h1>Cadastro de Úsuarios</h1>
          <input placeholder='Nome' name="name" type='text' />
          <input placeholder='Idade' name="age" type='number' />
          <input placeholder='Email' name="email" type='email' />
          <button type='button'>Cadastro</button>
        </form>

        {users.map((user) => (
          <div key={user.id}  className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>Delete</button>
          </div>
        ))}


      </div>

    </>
  )
}


