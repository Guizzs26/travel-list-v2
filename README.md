<h1>Travel List Project</h1>

<h2>Description</h2>

<p>
  Project where the user can place items that they are going to take on the go
  to ensure greater security of not forgetting anything. It can also mark the
  items picked up and track the percentage of items that were picked up. The
  user can also sort items in different ways and clear the list with one click.
</p>

<h2>What i learned?</h2>
<ul>
  <li>
    1.426 / 5.000 Resultados de tradução Resultado da tradução In this project I
    learned more about the state. The difference between state and chunks of
    state, where to put state, when to use state, and what type of state to use
    (global or local).
  </li>

  <li>
    I learned about elevating the state for a parent component higher than two
    or more child components that need access to that state.
  </li>

  <li>
    I learned about children-to-parent communication where the child component
    updates the state of the parent component receiving the state setter
    function as props. This can also be called inverse data flow (child updating
    the parent's state, data "flowing" up).
  </li>

  <li>
    I learned about derived states, where I don't need to create a new state
    when that state can be derived from an existing state, decreasing the amount
    of re-renders needed and the state being the only "source of truth" about
    that data. It's interesting because re-rendering the component will
    automatically re-calculate the derived states (usually in the form of normal
    variables).
  </li>

  <li>I improved my programming logic.</li>

  <li>I used conditionals for styling.</li>

  <li>
    I used conditional rendering with ternary operator, && operator and early
    return to render the entire Stats component if items.length === 0.
  </li>

  <li>I used item rendering with map.</li>

  <li>I used other JS high order functions such as slice, filter and sort.</li>

  <li>I learned to order elements in different ways.</li>

  <li>I learned to clear the state after being used in different ways.</li>
</ul>

<h2>How to use?</h2>

<h3>Prerequisites:</h3>

<p>
  Before you start, make sure you have installed Node.js and npm (or yarn) in
  your machine.
</p>

<h3>Steps</h3>
<ol>
  <li><strong>Clone the repository:</strong></li>
  <code>git clone https://github.com/your-username/your-project.git</code>

  <li><strong>Install dependencies:</strong></li>
  <code>cd your-project</code>
  <code>npm install</code>
  <p>or if you're using yarn:</p>
  <code>cd your-project</code>
  <code>yarn</code>

  <li><strong>Start the development server:</strong></li>
  <p>With npm:</p>
  <code>npm run dev</code>
  <p>With yarn:</p>
  <code>yarn dev</code>

  <li><strong>Open your browser:</strong></li>
  <p>
    Your application will be running at
    <a href="http://localhost:3000">http://localhost:3000</a>. Open this link in
    your browser to view the project.
  </p>
</ol>
