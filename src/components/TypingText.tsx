import React from "react";

interface TypingTextProps {
  text: string[];
  delay: number;
  className?: string;
  typingSpeed?: number;
}

class TypingText extends React.Component<TypingTextProps> {
    private typingInterval!: NodeJS.Timeout;

    constructor(props: TypingTextProps) {
        super(props);
        this.state = {
            currentText: "",
            currentIndex: 0,
            currentCharIndex: 0,
        };
    }

    startTypingAnimation = (wordIndex: number, charIndex: number) => {
        const { text, delay, typingSpeed } = this.props;
        
        this.typingInterval = setInterval(() => {
            const fullText = text[wordIndex];
            
            if (charIndex <= fullText.length) {
                this.setState({
                    currentText: fullText.substring(0, charIndex),
                    currentIndex: wordIndex,
                    currentCharIndex: charIndex,
                });
                charIndex++;
            } else {
                clearInterval(this.typingInterval);
                setTimeout(() => {
                    const nextIndex = (wordIndex + 1) % text.length;
                    this.startTypingAnimation(nextIndex, 0);
                }, delay);
            }
        }, typingSpeed);
    }

    componentDidMount() {
        this.startTypingAnimation(0, 0);
    }

    componentWillUnmount() {
        clearInterval(this.typingInterval);
    }

    render() {
        const { className } = this.props;
        const { currentText } = this.state as { currentText: string };

        return (
        <div className={className}>
            <span>{currentText}<span className="animate-[blink_1s_ease-in-out_infinite]">|</span></span>
        </div>
        );
    }
}

export default TypingText;