// "use client";

// import Image from "next/image";
// import styled, { keyframes } from "styled-components";

// const logoGlow = keyframes`
//   0% {
//     opacity: 0.8;
//     filter: brightness(1);
//     transform: scale(0.98);
//   }
//   50% {
//     opacity: 1;
//     filter: brightness(1.15);
//     transform: scale(1.02);
//   }
//   100% {
//     opacity: 0.8;
//     filter: brightness(1);
//     transform: scale(0.98);
//   }
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(0.8);
//     background-color: #b3d4fc;
//     box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
//   }
//   50% {
//     transform: scale(1.2);
//     background-color: #2563eb; /* Tailwind blue-600 like */
//     box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
//   }
//   100% {
//     transform: scale(0.8);
//     background-color: #b3d4fc;
//     box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
//   }
// `;

// /* Softer blue overlay background */
// const Wrapper = styled.div`
//   position: fixed;
//   inset: 0;
//   z-index: 50;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background:
//     radial-gradient(circle at 0% 0%, rgba(191, 219, 254, 0.95) 0%, rgba(129, 140, 248, 0.9) 30%, rgba(37, 99, 235, 0.9) 60%, rgba(15, 23, 42, 0.98) 100%);
//   color: #e5e7eb;
//   backdrop-filter: blur(14px);
//   box-shadow: inset 0 0 120px rgba(15, 23, 42, 0.55);
// `;

// const Inner = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;

// const LogoBox = styled.div`
//   padding: 18px 26px;
//   border-radius: 999px;
//   background: rgba(15, 23, 42, 0.9);
//   box-shadow: 0 18px 40px rgba(15, 23, 42, 0.55);
//   animation: ${logoGlow} 2s ease-in-out infinite;
// `;

// const Logo = styled(Image)`
//   height: auto;
//   width: 190px;
//   object-fit: contain;
// `;

// const DotsContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Dot = styled.div`
//   height: 18px;
//   width: 18px;
//   margin-right: 10px;
//   border-radius: 999px;
//   background-color: #b3d4fc;
//   animation: ${pulse} 1.5s infinite ease-in-out;

//   &:last-child {
//     margin-right: 0;
//   }

//   &:nth-child(1) {
//     animation-delay: -0.3s;
//   }
//   &:nth-child(2) {
//     animation-delay: -0.1s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.1s;
//   }
//   &:nth-child(4) {
//     animation-delay: 0.3s;
//   }
//   &:nth-child(5) {
//     animation-delay: 0.5s;
//   }
// `;

// const HelperText = styled.p`
//   font-size: 0.75rem;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   color: #e5e7eb;
// `;

// export default function Loader() {
//   return (
//     <Wrapper>
//       <Inner>
//         <LogoBox>
//           <Logo
//             src="/Brainityx_Logo.png"
//             alt="BRAINITYX RESEARCHTECH Logo"
//             width={190}
//             height={60}
//             priority
//           />
//         </LogoBox>

//         <DotsContainer>
//           <Dot />
//           <Dot />
//           <Dot />
//           <Dot />
//           <Dot />
//         </DotsContainer>

//         <HelperText>Loading</HelperText>
//       </Inner>
//     </Wrapper>
//   );
// }


"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";

const logoGlow = keyframes`
  0% {
    opacity: 0.9;
    filter: brightness(1);
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    filter: brightness(1.1);
    transform: scale(1.02);
  }
  100% {
    opacity: 0.9;
    filter: brightness(1);
    transform: scale(0.98);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }
  50% {
    transform: scale(1.2);
    background-color: #2563eb;
    box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
  }
  100% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }
`;

/* Softer blue overlay background */
const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 0% 0%, rgba(191, 219, 254, 0.95) 0%, rgba(129, 140, 248, 0.9) 30%, rgba(37, 99, 235, 0.9) 60%, rgba(15, 23, 42, 0.98) 100%);
  color: #e5e7eb;
  backdrop-filter: blur(14px);
  box-shadow: inset 0 0 120px rgba(15, 23, 42, 0.55);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

/* Light, glassy pill behind the logo */
const LogoBox = styled.div`
  padding: 18px 26px;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.9); /* very light slate/white */
  border: 1px solid rgba(148, 163, 184, 0.4); /* soft blue-grey border */
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.6); /* subtle glow ring */
  animation: ${logoGlow} 2s ease-in-out infinite;
`;

const Logo = styled(Image)`
  height: auto;
  width: 190px;
  object-fit: contain;
`;

const DotsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 10px;
  border-radius: 999px;
  background-color: #b3d4fc;
  animation: ${pulse} 1.5s infinite ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:nth-child(1) {
    animation-delay: -0.3s;
  }
  &:nth-child(2) {
    animation-delay: -0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e5e7eb;
`;

export default function Loader() {
  return (
    <Wrapper>
      <Inner>
        <LogoBox>
          <Logo
            src="/Brainityx_Logo.png"
            alt="BRAINITYX RESEARCHTECH Logo"
            width={190}
            height={60}
            priority
          />
        </LogoBox>

        <DotsContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotsContainer>

        <HelperText>Loading</HelperText>
      </Inner>
    </Wrapper>
  );
}
