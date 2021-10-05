AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      console.log("hi");
    },  
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        console.log("hello")
        const postersId = [
            "ShinChan", "Cars", "Kick-Buttowski", "Doraemon"
        ];
        if (postersId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          console.log("if condition")
          this.el.setAttribute("material", { color: "red" });
        }
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      /*this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        console.log("leave")
        if (selectedItemId) {
          console.log("leave condition")
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id === selectedItemId) {
            console.log("if condition leave")
            el.setAttribute("material", { color: "#fff" });
          }
        }
      });*/
        const id = this.el.getAttribute("id")
        const placesId = ["ShinChan","Kick-Buttowski","Cars","Doraemon"];

        if(placesId.includes(id)){
          console.log("leave")
            const placesContainer = document.querySelector("#posters-container")
            placesContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            })
            this.el.setAttribute("material", {
                color: "#0077CC",
                opacity: 1
            })
    }}
    },
    
  );