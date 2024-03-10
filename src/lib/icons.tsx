import { SvgIcon, SvgIconOwnProps } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { JSX } from "react";

type CustomIcon = JSX.IntrinsicAttributes &
  SvgIconOwnProps &
  CommonProps &
  Omit<
    any,
    | "className"
    | "style"
    | "classes"
    | "children"
    | "color"
    | "fontSize"
    | "htmlColor"
    | "inheritViewBox"
    | "shapeRendering"
    | "sx"
    | "titleAccess"
    | "viewBox"
  >;

export const Telegram = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path d="M20.7097 3.6545C20.7097 3.6545 22.6523 2.897 22.4904 4.73664C22.4365 5.49415 21.9508 8.1454 21.573 11.0131L20.278 19.5079C20.278 19.5079 20.17 20.7524 19.1987 20.9688C18.2274 21.1852 16.7704 20.2113 16.5005 19.9949C16.2847 19.8326 12.4534 17.3977 11.1043 16.2074C10.7265 15.8827 10.2948 15.2334 11.1582 14.476L16.8244 9.06525C17.4719 8.41595 18.1194 6.90095 15.4213 8.7406L7.86655 13.8808C7.86655 13.8808 7.00315 14.4219 5.3843 13.9349L1.87671 12.8527C1.87671 12.8527 0.581605 12.0412 2.79408 11.2295C8.19035 8.68645 14.8278 6.0893 20.7097 3.6545Z" />
  </SvgIcon>
);

export const Facebook = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <g clipPath="url(#clip0_618_754)">
      <path d="M22 12C22 6.47852 17.5215 2 12 2C6.47852 2 2 6.47852 2 12C2 16.9902 5.65625 21.1289 10.4375 21.8789V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29102 11.9316 5.90625 14.2148 5.90625C15.3086 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1914C13.9492 8.5625 13.5625 9.33398 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8789C18.3438 21.1289 22 16.9922 22 12Z" />
    </g>
    <defs>
      <clipPath id="clip0_618_754">
        <rect width="20" height="20" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const Discord = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <g clipPath="url(#clip0_618_759)">
      <path d="M19.6239 5.00565C18.2217 4.36225 16.7181 3.88823 15.1459 3.61674C15.1173 3.6115 15.0887 3.62459 15.0739 3.65078C14.8805 3.99473 14.6663 4.44344 14.5163 4.79612C12.8254 4.54296 11.1431 4.54296 9.48679 4.79612C9.33676 4.4356 9.11478 3.99473 8.92053 3.65078C8.90578 3.62547 8.87718 3.61237 8.84855 3.61674C7.27725 3.88736 5.7736 4.36139 4.37052 5.00565C4.35838 5.01088 4.34797 5.01962 4.34106 5.03096C1.48894 9.29196 0.707629 13.4482 1.09092 17.553C1.09265 17.573 1.10392 17.5922 1.11953 17.6045C3.00127 18.9864 4.82406 19.8253 6.61301 20.3814C6.64164 20.3901 6.67197 20.3797 6.69019 20.3561C7.11337 19.7782 7.49059 19.1688 7.81402 18.5281C7.83311 18.4905 7.81489 18.446 7.77588 18.4312C7.17754 18.2042 6.6078 17.9275 6.05975 17.6132C6.0164 17.5879 6.01293 17.5259 6.05281 17.4962C6.16814 17.4098 6.2835 17.3199 6.39363 17.2291C6.41355 17.2125 6.44131 17.209 6.46474 17.2195C10.0652 18.8633 13.9631 18.8633 17.521 17.2195C17.5445 17.2081 17.5722 17.2116 17.593 17.2282C17.7032 17.319 17.8185 17.4098 17.9347 17.4962C17.9746 17.5259 17.972 17.5879 17.9286 17.6132C17.3806 17.9336 16.8108 18.2042 16.2116 18.4303C16.1726 18.4451 16.1553 18.4905 16.1744 18.5281C16.5047 19.1679 16.882 19.7773 17.2973 20.3552C17.3147 20.3797 17.3459 20.3901 17.3745 20.3814C19.1721 19.8253 20.9949 18.9864 22.8766 17.6045C22.8931 17.5922 22.9035 17.5739 22.9053 17.5538C23.364 12.8083 22.1369 8.68612 19.6525 5.03183C19.6465 5.01962 19.6361 5.01088 19.6239 5.00565ZM8.35169 15.0536C7.26771 15.0536 6.37454 14.0584 6.37454 12.8363C6.37454 11.6141 7.25039 10.6189 8.35169 10.6189C9.46163 10.6189 10.3462 11.6228 10.3288 12.8363C10.3288 14.0584 9.45296 15.0536 8.35169 15.0536ZM15.6619 15.0536C14.5779 15.0536 13.6847 14.0584 13.6847 12.8363C13.6847 11.6141 14.5606 10.6189 15.6619 10.6189C16.7718 10.6189 17.6563 11.6228 17.639 12.8363C17.639 14.0584 16.7718 15.0536 15.6619 15.0536Z" />
    </g>
    <defs>
      <clipPath id="clip0_618_759">
        <rect width="22" height="16.7688" transform="translate(1 3.6156)" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const Twitter = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path d="M2.04949 3L9.8871 13.4796L2 22H3.77507L10.6802 14.5403L16.2594 22H22.3L14.0214 10.9309L21.3627 3H19.5876L13.2283 9.87026L8.09013 3H2.04949ZM4.65987 4.30752H7.43495L19.6892 20.6923H16.9142L4.65987 4.30752Z" />
  </SvgIcon>
);

export const Instagram = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <g clipPath="url(#clip0_618_767)">
      <path
        d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2092 4.79086 21 7 21H17C19.2092 21 21 19.2092 21 17V7C21 4.79086 19.2092 3 17 3Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 16C14.2092 16 16 14.2092 16 12C16 9.79085 14.2092 8 12 8C9.79085 8 8 9.79085 8 12C8 14.2092 9.79085 16 12 16Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M17.5 7.5C18.0523 7.5 18.5 7.0523 18.5 6.5C18.5 5.9477 18.0523 5.5 17.5 5.5C16.9477 5.5 16.5 5.9477 16.5 6.5C16.5 7.0523 16.9477 7.5 17.5 7.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_618_767">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const Star = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path
      d="M19.3996 9.39804C14.5466 9.39804 10.6004 5.45186 10.6004 0.600404C10.6004 0.267537 10.3329 1.06286e-06 10 1.03378e-06C9.66714 1.0047e-06 9.3996 0.267537 9.3996 0.600404C9.3996 5.45186 5.45186 9.39804 0.600409 9.39804C0.267543 9.39804 2.81149e-06 9.66558 2.78237e-06 9.99844C2.75325e-06 10.3313 0.267543 10.5988 0.600409 10.5988C5.45342 10.5988 9.3996 14.1982 9.3996 19.3996C9.3996 19.7325 9.66713 20 10 20C10.3329 20 10.6004 19.7325 10.6004 19.3996C10.6004 14.0691 14.5481 10.5988 19.3996 10.5988C19.7325 10.5988 20 10.3313 20 9.99844C20 9.66558 19.7325 9.39804 19.3996 9.39804Z"
      fill="#FFA15E"
    />
  </SvgIcon>
);

export const StarPoint = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path
      d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z"
      fill="#FFE9CE"
    />
    <path
      d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z"
      stroke="#FFA15E"
      strokeWidth="1.25"
    />
    <g filter="url(#filter0_d_569_17714)">
      <path
        d="M16.8747 10.6238C13.8416 10.6238 11.3753 8.15741 11.3753 5.12525C11.3753 4.91721 11.208 4.75 11 4.75C10.792 4.75 10.6248 4.91721 10.6248 5.12525C10.6247 8.15741 8.15741 10.6238 5.12526 10.6238C4.91721 10.6238 4.75 10.791 4.75 10.999C4.75 11.2071 4.91721 11.3743 5.12526 11.3743C8.15839 11.3743 10.6247 13.6239 10.6247 16.8747C10.6247 17.0828 10.792 17.25 11 17.25C11.208 17.25 11.3753 17.0828 11.3753 16.8747C11.3753 13.5432 13.8426 11.3743 16.8747 11.3743C17.0828 11.3743 17.25 11.2071 17.25 10.999C17.25 10.791 17.0828 10.6238 16.8747 10.6238Z"
        fill="#FFA15E"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_569_17714"
        x="3.5"
        y="3.5"
        width="15"
        height="15"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="0.625" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.129412 0 0 0 0 0.14902 0 0 0 0 0.184314 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_569_17714"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_569_17714"
          result="shape"
        />
      </filter>
    </defs>
  </SvgIcon>
);

export const Application = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path
      d="M17.25 10C19.0449 10 20.5 8.54493 20.5 6.75C20.5 4.95507 19.0449 3.5 17.25 3.5C15.4551 3.5 14 4.95507 14 6.75C14 8.54493 15.4551 10 17.25 10Z"
      stroke="#21262F"
      strokeWidth="2"
    />
    <path
      d="M17.25 20.5C19.0449 20.5 20.5 19.0449 20.5 17.25C20.5 15.4551 19.0449 14 17.25 14C15.4551 14 14 15.4551 14 17.25C14 19.0449 15.4551 20.5 17.25 20.5Z"
      stroke="#21262F"
      strokeWidth="2"
    />
    <path
      d="M6.75 10C8.54493 10 10 8.54493 10 6.75C10 4.95507 8.54493 3.5 6.75 3.5C4.95507 3.5 3.5 4.95507 3.5 6.75C3.5 8.54493 4.95507 10 6.75 10Z"
      stroke="#21262F"
      strokeWidth="2"
    />
    <path
      d="M6.75 20.5C8.54493 20.5 10 19.0449 10 17.25C10 15.4551 8.54493 14 6.75 14C4.95507 14 3.5 15.4551 3.5 17.25C3.5 19.0449 4.95507 20.5 6.75 20.5Z"
      stroke="#21262F"
      strokeWidth="2"
    />
  </SvgIcon>
);

export const System = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <g clipPath="url(#clip0_656_106)">
      <path
        d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V7.5C2.5 7.96024 2.8731 8.33333 3.33333 8.33333H7.5C7.96024 8.33333 8.33333 7.96024 8.33333 7.5V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
        stroke="#21262F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.6667H3.33333C2.8731 11.6667 2.5 12.0398 2.5 12.5V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V12.5C8.33333 12.0398 7.96024 11.6667 7.5 11.6667Z"
        stroke="#21262F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14.5834 8.33333C16.1942 8.33333 17.5 7.0275 17.5 5.41667C17.5 3.80584 16.1942 2.5 14.5834 2.5C12.9725 2.5 11.6667 3.80584 11.6667 5.41667C11.6667 7.0275 12.9725 8.33333 14.5834 8.33333Z"
        stroke="#21262F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 11.6667H12.5C12.0398 11.6667 11.6667 12.0398 11.6667 12.5V16.6667C11.6667 17.1269 12.0398 17.5 12.5 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V12.5C17.5 12.0398 17.1269 11.6667 16.6667 11.6667Z"
        stroke="#21262F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_656_106">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const MetaMask = (props: CustomIcon) => (
  <SvgIcon {...props}>
    <path
      d="M17.1598 1L10.5169 6.00133L11.7506 3.05067L17.1598 1Z"
      fill="#E17726"
      stroke="#E17726"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.84021 1L8.42263 6.04867L7.24936 3.05067L1.84021 1Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7719 12.594L13.0047 15.342L16.786 16.3973L17.8667 12.6547L14.7719 12.594Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.13992 12.6547L2.214 16.3973L5.99528 15.342L4.23471 12.594L1.13992 12.6547Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.78836 7.95064L4.73465 9.56864L8.48308 9.73797L8.35629 5.64264L5.78836 7.95064Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.2117 7.95067L10.6037 5.59534L10.5169 9.738L14.2654 9.56867L13.2117 7.95067Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.9953 15.342L8.25645 14.2247L6.30866 12.682L5.9953 15.342Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7436 14.2247L13.0047 15.342L12.6914 12.682L10.7436 14.2247Z"
      fill="#E27625"
      stroke="#E27625"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0047 15.342L10.7436 14.2247L10.9236 15.7207L10.9039 16.35L13.0047 15.342Z"
      fill="#D5BFB2"
      stroke="#D5BFB2"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.9953 15.342L8.09616 16.35L8.08302 15.7207L8.25645 14.2247L5.9953 15.342Z"
      fill="#D5BFB2"
      stroke="#D5BFB2"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.3446 11.6933L6.04694 11.0075L7.66806 10.255L8.3446 11.6933Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2782 12L11.1585 10L13.2782 11.0464L10.2782 12Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.99528 15.342L6.32177 12.594L4.23471 12.6547L5.99528 15.342Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6782 12.594L13.0047 15.342L14.7719 12.6547L12.6782 12.594Z"
      fill="#CC6228"
      stroke="#CC6228"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2654 9.56866L10.5169 9.738L10.8638 11.6933L11.2782 10L13.2782 11L14.2654 9.56866Z"
      fill="#CC6228"
    />
    <path
      d="M4.73463 9.62146L8.48306 9.79079L8.1362 11.7461L7.72183 10.0528L5.72183 11.0528L4.73463 9.62146Z"
      fill="#CC6228"
    />
    <path
      d="M4.73465 9.56866L6.30865 12.682L6.25544 11.132L4.73465 9.56866Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.7511 11.132L12.6913 12.682L14.2653 9.56866L12.7511 11.132Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.48309 9.73798L8.13623 11.6933L8.57637 14.0013L8.66966 10.9626L8.48309 9.73798Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5169 9.73798L10.3369 10.956L10.4236 14.0013L10.8638 11.6933L10.5169 9.73798Z"
      fill="#E27525"
      stroke="#E27525"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8638 11.6934L10.4236 14.0014L10.7436 14.2247L12.6914 12.682L12.7511 11.132L10.8638 11.6934Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25543 11.132L6.30864 12.682L8.25643 14.2247L8.57636 14.0014L8.13622 11.6934L6.25543 11.132Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9039 16.35L10.9236 15.7206L10.7574 15.572H8.24265L8.08302 15.7206L8.09616 16.35L5.9953 15.342L6.72909 15.9506L8.22294 17H10.7771L12.2709 15.9506L13.0047 15.342L10.9039 16.35Z"
      fill="#C0AC9D"
      stroke="#C0AC9D"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7436 14.2247L10.4236 14.0013H8.57636L8.25644 14.2247L8.08301 15.7207L8.24264 15.572H10.7574L10.9236 15.7207L10.7436 14.2247Z"
      fill="#161616"
      stroke="#161616"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4396 6.32667L18 3.56533L17.1598 1L10.7436 5.83267L13.2116 7.95067L16.6993 8.98667L17.4666 8.07267L17.1328 7.82933L17.6663 7.33467L17.2596 7.01L17.7931 6.59733L17.4396 6.32667Z"
      fill="#763E1A"
      stroke="#763E1A"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 3.56533L1.56693 6.32667L1.20693 6.59733L1.74036 7.01L1.33372 7.33467L1.86715 7.82933L1.53343 8.07267L2.30072 8.98667L5.78835 7.95067L8.25643 5.83267L1.84021 1L1 3.56533Z"
      fill="#763E1A"
      stroke="#763E1A"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6993 8.98668L13.2116 7.95068L14.2653 9.56868L12.6913 12.682L14.7718 12.6547H17.8666L16.6993 8.98668Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.78835 7.95068L2.30072 8.98668L1.13992 12.6547H4.23471L6.30863 12.682L4.73463 9.56868L5.78835 7.95068Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5169 9.73799L10.7436 5.83266L11.7506 3.05066H7.24936L8.25643 5.83266L8.48307 9.73799L8.56978 10.9693L8.57635 14.0013H10.4236L10.4302 10.9693L10.5169 9.73799Z"
      fill="#F5841F"
      stroke="#F5841F"
      strokeWidth="0.712817"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
