# Modal
Modal window


### Settings


Button
```
   <p style="text-align: center;"><a href="#"  class="modal-open" title="">open</a></p>
```


module.init(); - create demo modal window



for demo create in your html this
```
<div class="container"></div>
```



module.init(1);
```
  <div data-supermodal ='1'>
    <div class="modal-overlay modal_closed"></div>
    <div class="modal modal_closed">
        <header class="modal__header">
            <a href="#" class="modal__close modal-close" title="Close">Close</a>
            <h2>Enter</h2>
        </header>

        <main class="modal__content">
            <div class="form-field">
                <label for="name">Name:</label>
                <input required class="input__default " type="text" id="name" name="name">
            </div>
            <div class="form-field">
                <label>B-day:</label>
                <input required type="number" class="input__date-birth birth-day" 
                name="name" placeholder="Day"> -
                <input required type="number" class="input__date-birth birth-month"  
                name="name" placeholder="Mounth"> -
                <input required type="number" class="input__date-birth birth-year"  
                name="name" placeholder="Ywar">
            </div>
        </main>

        <footer class="modal__footer">
            <button  class="modal__cancel modal-cancel" title="Cancel">Cancel</button>
            <button  class="modal__save modal-save" title="Save">Save</button>
        </footer>
    </div>
    </div>
```
module.init(2);

```
    <div data-supermodal ='2' >
        <div class="modal-overlay modal_closed"></div>
        <div class="modal modal_closed modal-close">
            <header class="modal__header">
                <a href="#" class="modal__close"  title="Close">Close</a>
                <h2>Video</h2>
            </header>

            <main class="modal__content">

                <iframe width="550" height="235" 
                src="https://www.youtube.com/embed/HikrioqKxw4" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>

            </main>
        </div>
    </div>
```

module.init(3);



data-supermodelTitle = 'data-supermodelTitle' - title



data-supermodalContent="modalContent" - content

```
    <div data-supermodal ='3' data-supermodelTitle = 
    'data-supermodelTitle' data-supermodalContent="modalContent">
        <div class="modal-overlay modal_closed" ></div>
        <div class="modal modal_closed">
            <header class="modal__header">
                <a href="#" class="modal__close" id="modal-close" title=""></a>
                <h2></h2>
            </header>

            <main class="modal__content">
            </main>

            <footer class="modal__footer">
                <button class="modal__cancel" title="Cancel"></button>
            </footer>
        </div>
    </div>
```


PavelP
