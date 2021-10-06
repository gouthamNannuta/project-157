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
      this.el.addEventListener("mouseleave", () => {
        const id = this.el.getAttribute("id");
        console.log("leave")
        const postersId = [
            "ShinChan", "Cars", "Kick-Buttowski", "Doraemon"
        ];
        if (postersId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          console.log("if condition")
          this.el.setAttribute("material", { color: "white" });
        }
      })
    }},
    
  );
