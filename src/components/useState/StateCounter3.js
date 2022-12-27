import React, { useState } from "react";

function StateCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h4>First Name:{name.firstName}</h4>
        <h4>Last Name:{name.lastName}</h4>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
}

export default StateCounter3;
