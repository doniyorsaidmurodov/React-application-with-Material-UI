import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                <Fade
                    onReveal={() => this.percentage()}
                >
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchuase tickets before 5th October</h3>
                        <p>Aliqua in qui nisi dolore officia esse laborum quis. Lorem fugiat non dolore minim. Sint nostrud ullamco cupidatat irure ea officia sint officia aliquip sit proident magna nisi eu. Incididunt ex ut id enim mollit aute nostrud anim amet eu enim adipisicing.</p>
                        <MyButton
                            text="Purchase ticket"
                            bck="#ffa800"
                            color="#fff"
                        />
                    </div>
                </Slide>
                    

                </div>
            </div>
        )
    }
}

export default Discount;