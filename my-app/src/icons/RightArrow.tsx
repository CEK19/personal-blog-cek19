import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

type Props = {
  size?: "small" | "medium" | "large" | "inherit"
}

export const RightArrow = (props: Props) => {
  return (
    <ArrowForwardIosOutlinedIcon fontSize={props.size}/>
  )
}