import { LinearGradient } from "expo-linear-gradient";
import theme from "../../theme";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
      <LinearGradient 
        colors={theme.COLORS.GRADIENT}
        start={{x:0, y:1}}
        end={{x:0.5, y:0.5}}
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Input
          placeholder="E-mail"
          type="secondary"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input
          placeholder="Senha"
          type="secondary"
          secureTextEntry
        />

        <Button
          title="Login"
        />
      </LinearGradient>
  )
}