

function createTitleInput() {
    const input = document.createElement('input')
    input.classList.add("clockify-input");
    input.classList.add("clockify-input-default");
    input.setAttribute("placeholder", "Time report comment");
    return input;
}

function generateDescription(inputDescription) {
    const numElem = $('#content > h2')
    const titleElem = $('.subject h3') || ''

    let description = '';

    if (!!inputDescription.trim()) {
        description = inputDescription.trim()
    } else if (!!titleElem) {
        description = titleElem.textContent.trim();
    }

    if (numElem !== null) {
        const ticketNumber = numElem.textContent.trim().split('#')[1]
        description = ticketNumber + ': ' + description;
    }
    return description;
}

function addEnterHandling(input, link) {
    input.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            link.click();
        }
    });
}

clockifyButton.render(
  'body.controller-issues.action-show:not(.admin) #content > h2:not(.clockify)',
  {observe: false},
  (elem) => {
    const projectElem = $('.current-project'),
      contextual = $("#content .contextual");

    const actionsElem = document.createElement('div');
    actionsElem.className = 'track-time-content'

    contextual.after(actionsElem)


    if (!!$('.clockify-button')) {
      return;
    }

    const tags = () => [];

    const input = createTitleInput();

    const link = clockifyButton.createButton({
        description: () => generateDescription(input.value),
        projectName: projectElem.textContent.trim(),
        taskName: () => generateDescription(input.value),
        tagNames: tags,
    });

    addEnterHandling(input, link);

    actionsElem.appendChild(input)
    actionsElem.appendChild(link);
  }
);
