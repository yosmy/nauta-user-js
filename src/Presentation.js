// @refresh reset

import React, {memo} from "react";
import PropTypes from "prop-types";
import {Container, LinePlaceholder, Text} from "@yosmy/ui";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";

const Presentation = memo(({
    margin, account, nickname, onClick
}) => {
    return <Container
        margin={margin}
        onClick={account !== null && nickname !== null && onClick
            ? () => {
                onClick(
                    account,
                    nickname,
                );
            }
            : undefined
        }
    >
        {nickname !== null
            ? (nickname
                ? <Text>{nickname}</Text>
                : <Text>Sin nombre</Text>
            )
            : <LinePlaceholder
                width={100}
                margin={{
                    bottom: 0.1
                }}
            />
        }

        {account !== null
            ? <Text>{account}</Text>
            : <LinePlaceholder
                width={100}
                height={14}
            />
        }
    </Container>;
}, (prev, next) => {
    return (
        prev.account === next.account
        && prev.nickname === next.nickname
    );
});

Presentation.propTypes = {
    account: PropTypes.string,
    nickname: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false])
    ]),
    onClick: PropTypes.func,
    ...ContainerSpec.Props
};

export default Presentation;