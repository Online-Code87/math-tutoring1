import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Pricing() {
    return (
        <section id='pricing'>
            <Container>
                <Row className='pricing'>
                    <h1>Pricing</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Package</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Package">Single Session</td>
                                <td data-label="Duration">60 minutes</td>
                                <td data-label="Price" className="price">$25</td>
                                <td data-label="Notes">Perfect for quick help with homework or concepts</td>
                            </tr>
                            <tr>
                                <td data-label="Package">Weekly Plan</td>
                                <td data-label="Duration">2 × 60 minutes</td>
                                <td data-label="Price" className="price">$45</td>
                                <td data-label="Notes">Best for consistent progress</td>
                            </tr>
                            <tr>
                                <td data-label="Package">Monthly Package</td>
                                <td data-label="Duration">8 × 60 minutes</td>
                                <td data-label="Price" className="price">$160</td>
                                <td data-label="Notes">Discounted for regular learners</td>
                            </tr>
                            <tr>
                                <td data-label="Package">University/Graduate Support</td>
                                <td data-label="Duration">90 minutes</td>
                                <td data-label="Price" className="price">$40</td>
                                <td data-label="Notes">Advanced math, Maple, or research guidance</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <a href="#connect" ><button className="book-now-btn" onClick={() => console.log('connect')}>Book Now </button></a>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing
