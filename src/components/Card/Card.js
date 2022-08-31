import { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Avatar from "../Avatar";
import CardButton from "../CardButton";

import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as EditIcon } from "../../icons/edit.svg";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../icons/chevron-up.svg";

import styles from "./Card.module.scss";

const Card = ({
  open = false,
  firstName,
  lastName,
  phoneNumber,
  email,
  setOpenCardWithId,
  onDeleteClick,
  onEditClick,
}) => {
  const cardStyles = useMemo(() => {
    return !open
      ? classNames(styles.container)
      : classNames(styles.container, styles.open);
  }, [open]);

  return (
    <div className={cardStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar text={firstName[0].toString() + lastName[0].toString()} />
        <div className={styles.info}>
          <div className={styles.name}>
            {firstName} {lastName}
          </div>
          <div className={styles.phoneNumber}>{phoneNumber}</div>
          {open && <div className={styles.phoneNumber}>{email}</div>}
        </div>
        <div className={styles.openContainer} onClick={setOpenCardWithId}>
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      {open && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardButton text="EDIT" icon={<EditIcon />} onClick={onEditClick} />
          <CardButton
            text="DELETE"
            backgroundColor="#FFF3F3"
            color="red"
            icon={<DeleteIcon />}
            onClick={onDeleteClick}
          />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default Card;
