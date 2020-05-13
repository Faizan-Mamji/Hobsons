import { config, visitHobsons, click } from "../../common/helpers/businessHelper"
import { textIsPresent } from "../../../cypress/common/helpers/assertion"

const validateHeroText = () => {
    textIsPresent('//div[@class="pagetitle c"]/h1', config.graphicText)
}

const clickIcon = () => {
    click('//span[@class="fas fa-chevron-down"]')
}

const validateScrollText = () => {
    textIsPresent('//section[@id="section-learn-more"]//h2', config.sectionText)
}

const clickMenu = () => {
    click('//button[@class="menu"]')
}

const clickResourcesMenu = () => {
    click('//nav[@class="nav visible"]//a[contains(.,"Resources")]')
}

const assertChildMenu = () => {
    textIsPresent('//ul[@class="expand"]//a[contains(.,"Events")]', config.navChildMenu)
}

const clickChildEventsMenu = () => {
    click('//ul[@class="expand"]//a[contains(.,"Events")]')
}

//Test Starts Here

describe('Visit Hobsons Website & Assert', () => {
    it('It should open hobsons mainpage', () => {
        visitHobsons()
    })

    it('It should validate text on mainpage & click on arrow icon to scroll down & assert text', () => {
        validateHeroText()
        clickIcon()
        validateScrollText()
    })

    it('It should click on menu icon & assert child menu list', () => {
        clickMenu()
        clickResourcesMenu()
        assertChildMenu()
    })

    it('Navigate to events page & assert future events', () => {
        clickChildEventsMenu()
    })
})