### Pet The Pet!

1. Create a state for the pet image with an inital value of `pet.image`.

```javascript
const [image, setImage] = useState(pet.image);
```

2. Pass it to the image src html tag.

```javascript
<img className="image" alt={pet.name} src={image} />
```

3. Add an `onClick` to the button that changes the state from `"pet.image` to `"pet.image2"`

```javascript
<button type="button" class="btn btn-info" onClick={() => setImage(pet.image2)}>
  Pet
</button>
```

4. Test your code, the button should change the image to a gif!

### Search Bar

1. in `PetsList`, create a state called `query` and a method called `setQuery`.

```javascript
const [query, setQuery] = useState('');
```

2. In the input tag of `SearchBar` add an onChange method that calls `setQuery()` and gives it `event.target.value` as an argument.

```javascript
<input
  type="search"
  class="form-control rounded"
  placeholder="Search"
  aria-label="Search"
  aria-describedby="search-addon"
  onChange={(e) => setQuery(e.target.value)}
/>
```

4. At this point, whatever you type in your search bar should appear in the `query` state in `React Dev Tools`.
5. In your `PetsList`, filter your pets by comparing your pet's name with `query` using `includes`.

```javascript
const pets = props.pets
  .filter((pet) => pet.name.includes(query))
  .map((pet) => <PetItem key={pet.id} pet={pet} />);
```

6. At this point, our search bar is case sensitive. Fix it so that it becomes case insensitive.

```javascript
const pets = props.pets
  .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
  .map((pet) => <PetItem key={pet.id} pet={pet} />);
```

### Filter Pets by specie

1. in `PetsList`, create a state called `type` and a method called `setType`.

```javascript
const [type, setType] = useState('');
```

2. In the select tag of `PetSelector` add an onChange method that calls `setType()` and gives it `event.target.value` as an argument.

```javascript
<select class="form-select" onChange={(e) => setType(e.target.value)}>
```

4. At this point, whatever you select in your selector should appear in the `type` state in `React Dev Tools`.
5. In your `PetsList`, filter your pets by comparing your pet's type with `type` using `includes`.

```javascript
const pets = props.pets
  .filter(
    (pet) =>
      pet.name.toLowerCase().includes(query.toLowerCase()) &&
      pet.type.includes(type)
  )
  .map((pet) => <PetItem key={pet.id} pet={pet} />);
```

### Challenge part 1

1. In components create a new file called `SearchBar.js` and set up your component.

```javascript
import React from 'react';

function SearchBar() {
  return <div></div>;
}

export default SearchBar;
```

2. Copy your code from PetsList to your new component.

```javascript
function SearchBar() {
  return (
    <div class="input-group rounded">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
```

3. Import and call your new component in `PetsList.js`.

```javascript
<SearchBar />
```

4. Pass `setQuery` as a prop to `SearchBar`.

```javascript
<SearchBar setQuery={setQuery} />
```

5. In `SearchBar.js` receive your props and change `setQuery` to `props.setQuery`.

```javascript
function SearchBar(props) {
  return (
    <div class="input-group rounded">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => props.setQuery(e.target.value)}
      />
    </div>
  );
}
```

### Challenge part 2

1. In components create a new file called `Selector.js` and set up your component.

```javascript
import React from 'react';

function Selector() {
  return <div></div>;
}

export default Selector;
```

2. Copy your code from PetsList to your new component.

```javascript
function Selector() {
  return (
    <select class="form-select" onChange={(e) => setType(e.target.value)}>
      <option value="" selected>
        All
      </option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
}
```

3. Import and call your new component in `PetsList.js`.

```javascript
<Selector />
```

4. Pass `setType` as a prop to `Selector`.

```javascript
<Selector setType={setType} />
```

5. In `Selector.js` receive your props and change `setType` to `props.setType`.

```javascript
function Selector(props) {
  return (
    <select class="form-select" onChange={(e) => props.setType(e.target.value)}>
      <option value="" selected>
        All
      </option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
}
```
