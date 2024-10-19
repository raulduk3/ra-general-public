---
title: Discrete Mathematics on zyBooks
---
2024-08-26 09:39

tags: #cs #book

# 1. Logic

## 1.1 Propositions and logical operations

**Logic** is the study of formal reasoning. Logic is useful in any field in which it is important to make precise statement.

The most basic element in logic is a **proposition**, a statement that is either true or false. It's validity is called **truth value**. A proposition is still a proposition whether its truth value is known to be true, known to be false, unknown, or a matter of opinion.

### The conjunction operation (AND)

Propositional variables such as p, q, and r can be used to denote arbitrary propositions.

$$
\begin{aligned}
p: \text{Jan has 31 days}  \\
q: \text{Feb has 33 days}
\end{aligned}
$$

A **compound proposition** is created by connecting individual propositions with logical operations. A **logical operation** combines propositions using a particular composition rule. A truth table shows the truth value of a compound proposition for every possible combination of truth values for the variables contained in the compound proposition.

$$
\begin{aligned}
p \cap q = \text{January has 31 days and February has 33 days.} = false \\
\end{aligned}
$$

### The disjunction operation (OR)

The disjunction of p and q. True if either q or q are true, or if both are true. The **inclusive or**.

$$
p  \cup q = \text{January has 31 days or February has 33 days.} = true
$$

#### Ambiguity of "or" in English

The **exclusive or** of p and q evaluates to true when p is true and q is false or when q is true and p is false. The inclusive or operation is the same as the disjunction ($\cup$) operation and evaluates to true when one or both of the propositions are true.

The exclusive or operation is usually denoted with the symbol $\oplus$.

$$
p \oplus q
$$

The **negation** operation acts on just one proposition and has the effect of reversing the truth value of the proposition. The negation of proposition p is denoted $\neg p$ and is read as "not p."

## 1.2 Evaluating compound propositions

A **compound proposition** can be created by using more than one operation.

$$
p \cup \neg q
$$

If p or not q are true, this evaluates to true.

The order in which the operations are applied in a compound proposition may affect the truth value of the proposition. In the absence of parentheses, the rule is that negation is applied first, then conjunction, then disjunction. The negation operation is always applied first.

A truth table for a compound proposition has a row for every possible combination of truth assignments for the statement's variables. The truth values in the variable columns are chosen methodically to create all possible combinations.

A truth table for a compound proposition has a row for every possible combination of truth assignments for the statement's variables. If a compound proposition has n variables, there are $2^{n}$ rows. The truth table for compound proposition $(p \cup r) \cap \neg q$ has 23=8 rows.

The rightmost variable column is filled in with alternating Ts and Fs. Moving left, the next variable column alternates by twos. Moving left again, the next variable column alternates by fours.

## 1.3 Conditional statements

**Conditional operation/proposition/statement**

$$
p \rightarrow q
$$

This proposition is read "if p, then q". P is called he **hypothesis** and q is called the **conclusion**. **The only way for a conditional statement to be false is if the hypothesis/premise is true and the conclusion is false.** If the hypothesis is false, then the conditional statement is true regardless of the truth value of the conclusion.

**T does not go to F.**

|                         | p: You mow Mr. Smith's lawn \\ q: Mr. smith will pay you     |
| ----------------------- | ------------------------------------------------------------ |
| If p, then q.           | If you mow Mr. Smith's lawn, then he will pay you.           |
| If p, q.                | If you mow Mr. Smith's lawn, he will pay you.                |
| q if p                  | Mr. Smith will pay you if you mow his lawn.                  |
| $p implies q.           | Mowing Mr. Smith's lawn implies that he will pay you.        |
| q whenever p.           | Mr. Smith will pay you whenever you mow his lawn.            |
| $p only if q.           | You will mow Mr. Smith's lawn only if he pays you.           |
| $p is sufficient for q. | Mowing Mr. Smith's lawn is sufficient for him to pay you.    |
| q is necessary for p.   | Mr. Smith's paying you is necessary for you to mow his lawn. |

### The converse, contrapositive, and inverse

Three conditional statements related to proposition $p \to q$ are so common that they have special names.

The converse of $p \to q$ is $q \to p$. The contrapositive of $p \to q$ is $\neg q \to \neg p$. The inverse of $p \to q$ is $\neg p \to \neg q$.

|                     |                     |                                                             |
| ------------------- | ------------------- | ----------------------------------------------------------- |
| **Proposition:**    | $p \to q$           | Ex: If it is raining today, the game will be cancelled.     |
| **Converse:**       | $q \to p$           | If the game is cancelled, it is raining today.              |
| **Contrapositive:** | $\neg q \to \neg p$ | If the game is not cancelled, then it is not raining today. |
| **Inverse:**        | $\neg p \to \neg q$ | If it is not raining today, the game will not be cancelled. |

### The biconditional operation

If p and q are propositions, the proposition "p if and only if q" is expressed with the biconditional operation and is:

$$
p \leftrightarrow q
$$

**The proposition is true when p and q have the same truth value and is false when p and q have different truth values.**

Alternative ways of expressing $p \to q$ in English include "p is necessary and sufficient for q" or "if p then q, and conversely." The term iff is an abbreviation of the expression "if and only if," as in "p iff q."

The conditional and biconditional operations can be combined with other logical operations.

$$
(p \to q) \cap r
$$

If parentheses are not used to explicitly indicate the order in which the operations should be applied, then $\cap$, $\cup$, and $\neg$ should be applied before $\to$ or $\leftrightarrow$.

## 1.4 Logical equivalence

A compound proposition is a **tautology**, if the proposition is always true, regardless of the truth value of the individual propositions that occur in it. A compound proposition is a **contradiction** if the proposition is always false, regardless of the truth value of the individual propositions that occur in it.

$$
\begin{aligned}
p \cup \neg p \text{ is always true, this is a tautology} \\
p \cap \neg p \text{ is always false, this is a contradiction}
\end{aligned}
$$

Showing that a compound proposition is not a tautology only requires showing a particular set of truth values for its individual propositions that cause the compound proposition to evaluate to false.

Two compound propositions are said to be **logically equivalent** if they have the same truth value regardless of the truth values of their individual propositions

### Showing logical equivalence using truth tables

Two compound propositions are said to be logically equivalent if they have the same truth value regardless of the truth values of their individual propositions. If s and r are two compound propositions, the notation $s \equiv r$ is used to indicate that r and s are logically equivalent.

For example, $p$ and $\neg  \neg p$ have the same truth value regardless of whether p is true or false, so $p \equiv \neg  \neg p$. **Propositions s and r are logically equivalent if and only if the proposition $s \leftrightarrow r$ is a tautology**. Note that $s \equiv$ r if and only if $r \equiv s$.

### De Morgan's laws for propositions

De Morgan's laws are logical equivalences that show how to correctly distribute a negation operation inside a parenthesized expression.

$$
\begin{aligned}
1. \neg(p \cup q) \equiv (\neg p \cap \neg q)  \\
2. \neg(p \cap q) \equiv (\neg p \cup \neg q)
\end{aligned}
$$

## 1.5 Laws of propositional logic

If two propositions are logically equivalent, then one can be substituted for the other within a more complex proposition.

$$
\begin{aligned}
p \to q \equiv \neg p \cup q  \\
(\neg t \cap r)\to(\neg s \cup t) \equiv \neg(\neg t \cap r)\cup(\neg s \cup t)
\end{aligned}
$$

| Idempotent laws:        | $$ p \cup p \equiv p $$                                   | $$ p \cap p \equiv p $$                                   |
| ----------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| Associative laws:       | $$ (p \cap q) \cup r \equiv p \cup (q \cup r) $$          | $$ (p \cap q) \cap r \equiv p \cap (q \cap r) $$          |
| Commutative laws:       | $$ p \cup q \equiv q \cup p $$                            | $$ p \cap q \equiv q \cap p $$                            |
| Distributive laws:      | $$ p \cup (q \cap r) \equiv (p \cup q) \cap (p \cup r) $$ | $$ p \cap (q \cup r) \equiv (p \cap q) \cup (p \cap r) $$ |
| Identity laws:          | $$ p \cup F \equiv p $$                                   | $$ p \cap T \equiv p $$                                   |
| Domination laws:        | $$ p \cap F \equiv F $$                                   | $$ p \cup T \equiv T $$                                   |
| Double negation law:    | $$ \neg \neg p \equiv p $$                                | $$ $$                                                     |
| Complement laws:        | $$ p \cap \neg p \equiv F $$ $$ \neg T \equiv F $$        | $$ p \cup \neg p \equiv T$$ $$ \neg F \equiv T $$         |
| De Morgan's laws:       | $$ \neg (p \cup q) \equiv \neg p \cap \neg q $$           | $$ \neg (p \cap q) \equiv \neg p \cup \neg q $$           |
| Absorption laws:        | $$ p \cup (p \cap q) \equiv p $$                          | $$ p \cap (p \cup q) \equiv p $$                          |
| Conditional identities: | $$ p \to q \equiv \neg p \cup q $$                        | $$ p \leftrightarrow q \equiv (p \to q) \cap (q \to p) $$ |

## 1.6 Predicates and quantifiers

Many mathematical statements contain variables. **The statement "x is an odd number" is not a proposition because the statement does not have a well-defined truth value until the value of x is specified.** If x=5, the statement is true. If x=4, the statement is false.

A logical statement whose truth value is a function of one or more variables is called a **predicate**. If $P(x)$ is defined to be the statement "x is an odd number," then $P(5)$ corresponds to the statement "5 is an odd number." $P(5)$ is a proposition because it has a well-defined truth value.

**Another way to turn a predicate into a proposition is to use a quantifier.**

The **domain** of a variable in a predicate is the set of all possible values for the variable. For example, a natural domain for the variable x in the predicate "x is an odd number" would be the set of all integers. If the domain of a variable in a predicate is not clear from context, the domain should be given as part of the definition of the predicate.

### Universal quantifier

If all the variables in a predicate are assigned specific values from their domains, then the predicate becomes a proposition with a well-defined truth value. Another way to turn a predicate into a proposition is to use a quantifier. The logical statement $\forall xP(x)$ is read "for all x, P of x" or "for every x, P of x" The statement $\forall xP(x)$ asserts that $P(x)$ is true for every possible value of x in its domain. The symbol $\forall$ is a **universal quantifier**, and the statement $\forall xP(x)$ is called a **universally quantified statement**. $\forall xP(x)$ is a proposition because it is either true or false. $\forall xP(x)$ is true if and only if $P(n)$ is true for every n in the domain of variable x.

A **counterexample** for a universally quantified statement is an element in the domain for which the predicate is false. A single counterexample is sufficient to show that a universally quantified statement is false.

### Existential quantifier

The logical statement $\exists xP(x)$ is read "there exists an x, such that P of x." The statement $\exists xP(x)$ asserts that $P(x)$ is true for at least one possible value for x in its domain. The symbol $\exists$ is an existential quantifier, and the statement $\exists xP(x)$ is called an existentially quantified statement. $\exists xP(x)$ is a proposition because it is either true or false. $\exists xP(x)$ is true if and only if $P(n)$ is true for at least one value $n$ in the domain of variable $x$.

If the domain is a finite set of elements $a_1,a_2,…,a_k$, then the following equality holds for any predicate P defined on the domain:
$$\exists xP(x)=P(a1) \cup P(a2) \cup … \cup P(ak)$$

## 1.7 Quantified statements

The universal and existential quantifiers are generically called quantifiers. A logical statement that includes a universal or existential quantifier is called a **quantified statement**

A variable x in the predicate $P(x)$ is called a **free variable** because the variable is free to take on any value in the domain. The variable $x$ in the statement $\forall xP(x)$ is a **bound variable** because the variable is bound to a quantifier

## 1.8 De Morgan's law for quantified statements

The negation operation can be applied to a quantified statement, such as $\neg  \forall xF(x)$. If the domain for the variable x is the set of all birds and the predicate F(x) is "x can fly," then the statement  $\neg \forall xF(x)$ is equivalent to: "Not every bird can fly." which is logically equivalent to the statement: "There exists a bird that cannot fly."

$$
\neg \forall xF(x) \equiv \exists x\neg F(x)
$$

Note that logical equivalence for quantified statements means that the statements have the same truth value for any sets used as the domains of the variables and any predicates defined on those domains.

Similarly, consider the statement $\neg \exists xA(x)$ in which the domain is the set of children enrolled in a class and $A(x)$ is the predicate "x is absent today." The statement is expressed in English as: "It is not true that there is a child in the class who is absent today." which is logically equivalent to: "Every child enrolled in the class is not absent today."

$$
\neg \exists xF(x) \equiv \forall x\neg F(x)
$$

## 1.9 - 1.10 Nested quantifiers

If a predicate has more than one variable, each variable must be bound by a separate quantifier. A logical expression with more than one quantifier that binds different variables in the same predicate is said to have **nested quantifiers**.

### Alternating nested quantifiers

A quantified expression can contain both types of quantifiers as in: $\exists x \forall yM(x,y)$. The quantifiers are applied from left to right, so the statement $\exists x \forall yM(x,y)$ translates into English as:

$$
\exists x \forall yM(x,y) \leftrightarrow \text{There is a person who sent an email to everyone}.
$$

Switching the quantifiers changes the meaning of the proposition:

$$
\forall x \exists yM(x,y) \leftrightarrow \text{Every person sent an email to someone.} \\
$$

### De Morgan's law with nested quantifiers

Consider a scenario in which the domain is the set of all students in a school. The predicate $L(x,y)$ indicates that x likes y.

The statement $\exists x \forall yL(x,y)$ is read as:

$$
\exists x \forall yL(x,y) \leftrightarrow \text{There is a student who likes everyone in the school.} \\
$$

The negation of the statement is:

$$
\neg \exists x \forall yL(x,y) \leftrightarrow \text{There is no student who likes everyone in the school.} \\
$$

| De Morgan's laws for nested quantified statements.                          |
| --------------------------------------------------------------------------- |
| $$ \neg \forall x \forall yP(x,y) \equiv \exists x \exists y \neg P(x,y)$$  |
| $$ \neg \forall x \exists yP(x,y) \equiv \exists x \forall y \neg P(x,y) $$ |
| $$ \neg \exists x \forall yP(x,y) \equiv \forall x \exists y \neg P(x,y) $$ |
| $$ \neg \exists x \exists yP(x,y) \equiv \forall x \forall y \neg P(x,y) $$ |

Applying De Morgan's laws yields: $\neg \exists x \forall yL(x,y) \equiv  \forall x \exists y \neg L(x,y)$ which is translated into:

$$ \forall x \exists y \neg L(x,y) \leftrightarrow \text{Every student in the school has someone that they do not like.} $$

### Using logic to express "everyone else"

Consider a scenario where the domain is a group of people working on a joint project. Define the predicate M(x,y) that indicates whether x sent an email to y. The statement $\forall x \forall yM(x,y)$ asserts that every person sent an email to every other person and every person sent an email to himself or herself. How could we use logic to express that everyone sent an email to everyone else without including the case that everyone sent an email to himself or herself? The idea is to use the conditional operation: $(x \not\equiv y) \to M(x,y)$.

### Moving quantifiers in logical statements

Now consider a set of people at a party as the domain. We would like to find a logical expression that is equivalent to the statement:"Every adult is married to someone at the party." There are two predicates:

$M(x,y):x$ is married to y.

$A(x):x$ is an adult.

Here is a statement that is closer in form to a logical expression and has the same meaning: "For every person x, if x is an adult, then there is a person y to whom x is married." The logic is expressed as:

$$
 \forall x(A(x) \to  \exists yM(x,y))
$$

We will only consider logical expressions in which each quantifier quantifies a different variable. For example, the expression above contains "$\exists y$" and "$\forall x$" where x and y are different variables. In such expressions, one can always move a quantifier and its variable to the left until another quantifier is reached. In the expression above, "$\exists y$" can be moved to the left so that it appears just after the $\forall x$, resulting in the following equivalent expression:

$$
\forall x \exists y(A(x) \to M(x,y))
$$

Note that moving a quantifier in front of another quantifier can potentially change the meaning of the expression. For example, $\forall x \exists y(A(x) \to M(x,y))$ is not logically equivalent to $\exists y \forall x(A(x) \to M(x,y))$.

## 1.11 Logical reasoning

An **argument** is a sequence of propositions, called **hypotheses**, followed by a final proposition, called the **conclusion**. An argument is **valid** if the conclusion is true for every truth assignment that causes all the hypotheses to be true.

$$
\begin{aligned}
h_{1} \\
h_{2} \\
... \\
h_{n} \\
\overline{\therefore c}
\end{aligned}
$$

The argument is valid whenever the proposition $(h_{1}\wedge h_{2} \wedge \dots \wedge h_{n}) \to c$ is a tautology.

1. To show that the argument with hypotheses p and $p \to q$ and conclusion q is valid, fill in the truth table for $p$, $q$, and $p \to q$.
2. There is only one row in which both hypotheses are true.
3. Since the conclusion is also true in that row, the argument is valid.

A valid argument is a guarantee that the conclusion is true whenever all of the hypotheses are true. An argument can be shown to be invalid by showing an assignment of truth values to its variables that makes all the hypotheses true and the conclusion false.P

## 1.12 Rules of inference with propositions

| Rule of inference                                  | Name                   |
| -------------------------------------------------- | ---------------------- |
| $p \to q$\\$p$\\$\because   q$                     | Modus ponens           |
| $p \to q$\\$\neg q$\\$\because    \neg p$          | Modus tollens          |
| $p$\\$\because   p \cup q$                         | Addition               |
| $p \cap q$\\$\because   p$                         | Simplification         |
| $p$\\$q$\\$\because  p \cap q$                     | Conjunction            |
| $p \to q$\\$q \to r$\\$\because   p \to r$         | Hypothetical syllogism |
| $p \cup q$\\$\neg p$\\$\because   q$               | Disjunctive syllogism  |
| $p \cup q$\\$\neg p \cup r$\\$\because   q \cup r$ | Resolution             |

A **logical proof** of an argument is a sequence of steps, each of which consists of a proposition and a justification. If the proposition in a step is a hypothesis, the justification is "Hypothesis." Otherwise, the proposition must follow from previous steps by applying one law of logic or rule of inference.

## 1.13 Rules of inference with quantifiers

In order to apply the rules of inference to quantified expressions, such as $\forall x \neg (P(x) \cap Q(x)) \forall x \neg (P(x) \cap Q(x))$, we need to remove the quantifier by plugging in a value from the domain to replace the variable x. **A value that can be plugged in for variable x is called an element of the domain of $X$.**

# 2. Proofs

## Existential instantiation ##

Existential instantiation is a law of logic that says if an object is known to exist, then that object can be given a name, as long as the name is not currently being used to denote something else

## 2.2 Introduction to proofs

A primary endeavor in mathematics is to prove theorems.

In computer science, proofs are important for establishing that a program works as expected, showing that a cryptosystem is secure, or validating a set of inferences in artificial intelligence, to name a few applications.

### Theorems that are universal or existential statements

Most theorems are assertions about all the elements in a set and are therefore universal statements. A universal statement does not necessarily explicitly use words associated with a universal quantifier, like "for all" or "for every." Consider the theorem below:

The sum of two positive real numbers is strictly greater than the average of the two numbers.

$$
\forall x \forall y \left( (x > 0 \; \text{and} \; y > 0) \rightarrow  (x + y ) > \dfrac{x + y}{2}\right)
$$

## 2.4 Writing direct proofs

### The process of writing proofs

Proofs in their final form are expressed in their simplest and most direct way; however, proofs are rarely conceived in their simplest form. Coming up with proofs requires trial and error, even for experienced mathematicians. Often the process includes experimenting with small examples in order to develop intuition about a more general rule. The process almost always entails some dead ends along the way.

## 2.5 Proof by contrapositive

A proof by contrapositive proves a conditional theorem of the form $p \to c$ by showing that the contrapositive $\neg c \to  \neg p$ is true. In other words, $\neg c$ is assumed to be true and $\neg p$ is proven as a result of $\neg c$.

## 2.6 Proof by contradiction

A **proof by contradiction** starts by assuming that the theorem is false and then shows that some logical inconsistency arises as a result of the assumption. The reasoning behind proof by contradiction is that if the assumption that the theorem is false leads to a conclusion which cannot be true, then the theorem must be true. A proof by contradiction is sometimes called an **indirect proof**.

## 2.7 Proof by cases

A **proof by cases** of a universal statement such as $\forall xP(x)$ breaks the domain for the variable x into different classes and gives a different proof for each class. The proof for each class is called a case. Every value in the domain must be included in at least one class. In a proof by cases, the cases are numbered, and each case begins with "Case $n$:", where n is the number of that case. The number is followed by a statement of the assumptions for that case.

# 3. Sets

## 3.1 Sets and subsets

Sets play an important role in almost every area of mathematics, including discrete math. A **set** is a collection of objects. Objects may be of various types, such as titles of books, name of bridges, or rational numbers.

A set is defined by indicating which elements belong to it. The **roster notation** definition of a set is a list of the elements enclosed in curly braces with the individual elements separated by commas.

$$
A = \{2,4,6,10\} = \{10,6,4,2\} = \{2,2,4,6,10\}
$$

Order is unimportant, also duplicates exist only once in the set.

### Notation related to sets ###

The symbol $\in$, $\notin$ is used to indicated that an element is in a set, as in:

$$
2\in A
$$

The set with no elements is called the **empty set/null set** and is denoted by the symbol $\emptyset$.

A **finite set** is a set that is either empty or whose elements can be numbered 1 through n for some positive integer $n$. An **infinite set** is a set that is not finite. The **cardinality** of a finite set $A$, denoted by $|A|$, is the number of distinct elements in a set.

Sometimes ellipses are used to denote a long or (possibly infinite set).

$$
B = \{1,3,5,\dots,99\}
$$

Two sets are equal if they have the same elements. Define:

$$
\begin{aligned}
D = \{3,4,5\} \\
E = \{5,3,4\}\\
D = E
\end{aligned}
$$

### Common mathematical sets.

| **Symbol**   | **Examples of elements**  | **Set**                                                                                                                                                                                                         |
| ------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\mathbb{N}$ | 0,1,2,3,…                 | The set of natural numbers is the set of all integers that are greater than or equal to 0. Note: Many sources exclude 0 from the set of natural numbers. However, in discrete mathematics, 0 is often included. |
| $\mathbb{Z}$ | …,-2,-1,0,1,2,…           | The set of all integers is represented by the symbol Z.                                                                                                                                                         |
| $\mathbb{Q}$ | 0, 12, 5.23, -53, 7       | The set of rational numbers is the set of real numbers that can be expressed as ab, where a and b are integers and b $\neq$ 0.                                                                                  |
| $\mathbb{P}$ | $\pi$, 2, 53, -46         | The set of irrational numbers is the set of real numbers that cannot be expressed as ab, where a and b are integers and b $\neq$ 0.                                                                             |
| $\mathbb{R}$ | 0, 12, 5.23, -53, $\pi$,2 | The set of real numbers is represented by the symbol R.                                                                                                                                                         |

The superscript + is used to indicate the positive elements of a particular set. For example, the set $R^{+}$ is the set of all positive real numbers, and $Z^{+}$ is the set of all positive integers.

In **set builder notation**, a set is defined by specifying that the set includes all elements in a larger set that also satisfy certain conditions. The notation would look like: $A=\{x \in S:P(x)\}$ S is the larger set from which the elements in A are taken. $P(x)$ is some condition for membership in A. The colon symbol ":" is read "such that". The description for A above would read: "all x in S such that P(x)". Often, the set S will be one of the standard mathematical sets from the table above. For example, the set:

$$
C = \{ x \in \mathbb{Z} : 0 < x < 100 \text{ and } x \text{ is prime} \}
$$

If every element in A is also an element of B, then A is a subset of B, denoted as $A\subseteq B$. If there is an element of A that is not an element of B, then A is not a subset of B, denoted as $A⊈B$. If the universal set is U, then for every set $A:\emptyset\subseteq A\subseteq U$

Two sets are equal if and only if each is a subset of the other:A=B if and only if $A\subseteq B$ and $B\subseteq A$If $A\subseteq B$ and there is an element of B that is not an element of A (i.e., $A\not\equiv  B$ ), then A is a proper subset of B, denoted as $A\subset B$. Venn diagrams are particularly useful for visualizing subset relationships between sets.

## 3.2 Sets of sets

It is possible that the elements of a set are themselves sets. For example, consider the set A:

$$
A=\{ \{1,2\},\emptyset,\{1,2,3\},\{1\} \}
$$

The **power set** of a set A, denoted $P(A)$, is the set of all subsets of $A$. For example, if $A=\{1,2,3\}$, then:

$$
P(A)=\{\emptyset,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}\}
$$

### Cardinality of a power set

Let A be a finite set of cardinality n. Then t**he cardinality of the power set of $A$ is $2^n$,** or $|P(A)|=2^n$.

## 3.3 Union and intersection

Sets can be combined in different ways to define new sets.

### The set intersection operation

Let A and B be sets. The intersection of A and B, denoted $A \bigcap B$ and read "A intersect B", is the set of all elements that are elements of both A and B.

### The set union operation

The union of two sets, A and B, denoted $A \bigcup  B$ and read "A union B", is the set of all elements that are elements of A or B. The definition for union uses the inclusive or, meaning that if an element is an element of both A and B, then it is also an element of $A \bigcup  B$.

## 3.4 More set operations

Several more operations are commonly used to define sets.

The difference between two sets $A$ and $B$, denoted $A-B$, is the set of elements that are in A but not in B. The difference operation is not commutative since the equation $A-B=B-A$ is not always true.

The **complement** of a set A, denoted $\overline{A}$, is the set of all elements in U that are not elements of A. An alternative definition of $\overline{A}$ is $U-A$. For example, let $U=Z$, and define: $A=\{x \in Z:x \text{ is odd}\}$

The complement of A is the set of all even integers.

### Summary of set operations

| Operation            | Notation       | Description                        |
| -------------------- | -------------- | ---------------------------------- |
| Intersection         | $A \bigcap B$  | $x : x \in A \cap x \in B$         |
| Union                | $A \bigcup  B$ | ${x:x \in A \cup x \in B}$         |
| Difference           | $A-B$          | ${x : x \in A \cap x \notin B}$    |
| Symmetric difference | $A \oplus B$   | ${x : x \in A - B \cup x \in B-A}$ |
| Complement           | $\overline{A}$ | ${x:x \notin A}$                   |

## 3.5 Cartesian products

An ordered pair of items is written $(x,y)$. The first entry of the ordered pair (x,y) is x and the second entry is y. The use of parentheses () for an ordered pair indicates that the order of entries is significant, unlike sets which use curly braces {}, indicating that the order in which the elements are listed does not matter. For example, $(x,y) \neq (y,x)$ unless x=y. By contrast, $\{x,y\}$ is equal to $\{y,x\}$, with both denoting the set consisting of elements x and y.

**Two ordered pairs $(x,y)$ and $(u,w)$ are equal if and only if $x=u$ and $y=w$.**

For two sets, A and B, the Cartesian product of A and B, denoted $A \times B$, is the set of all ordered pairs in which the first entry is in A and the second entry is in B. That is:

$$
A \times B=\{(a,b):a \in A \cap b \in B\}
$$

Since the order of the elements in a pair is significant, $A \times B$ will not be the same as $B \times A$, unless $A=B$, or either A or B is empty. If A and B are finite sets, then $|A×B| = |A|\cdot|B|$.

## 3.6 Set identities

| Name                  | Identities1                                                      |                                                                 |
| --------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| Idempotent laws       | $A \bigcup  A=A$                                                 | $A \bigcap A=A$                                                 |
| Associative laws      | $(A \bigcup  B) \bigcup  C=A \bigcup  (B \bigcup  C)$            | $(A \bigcap B) \bigcap C=A \bigcap (B \bigcap C)$               |
| Commutative laws      | $A \bigcup  B=B \bigcup  A$                                      | $A \bigcap B=B \bigcap A$                                       |
| Distributive laws     | $A \bigcup  (B \bigcap C)=(A \bigcup  B) \bigcap (A \bigcup  C)$ | $A \bigcap (B \bigcup  C)=(A \bigcap B) \bigcup  (A \bigcap C)$ |
| Identity laws         | $A \bigcup  \emptyset=A$                                         | $A \bigcap U=A$                                                 |
| Domination laws       | $A \bigcap \emptyset=\emptyset$                                  | $A \bigcup  U=U$                                                |
| Double complement law | $\overline{\overline{A}} =A$                                     |                                                                 |
| Complement laws       | $A \bigcap \overline{A}―=\emptyset$\\$\overline{U}=\emptyset$    | $A \bigcup \overline{A}=U$\\$\overline{\emptyset}=U$            |
| De Morgan's laws      | $A\overline{A \bigcup  B}=\overline{A} \bigcap \overline{B}$     | $\overline{A \bigcap B}=\overline{A} \bigcup  \overline{B}$     |
| Absorption laws       | $A \bigcup  (A \bigcap B)=A$                                     | $A \bigcap (A \bigcup  B)=A$                                    |

## 3.7 Partitions

Two sets, A and B, are said to be disjoint if their intersection is empty $(A \bigcap B = \emptyset)$. A sequence of sets, $A_1,A_2,\dots,A_n$, is pairwise disjoint if every pair of distinct sets in the sequence is disjoint (i.e., $A_i \bigcap Aj=\emptyset$ for any i and j in the range from 1 through $n$ where i $\neq$ j).

A partition of a non-empty set A is a collection of non-empty subsets of A such that each element of A is in exactly one of the subsets. $A_1,A_2,\dots,A_n$ is a partition for a non-empty set A if all of the following conditions hold:

- For all i, $A_i\subseteq A$.
- For all i, $A_i \not\equiv \emptyset$.
- $A_1,A_2,…,A_n$ are pairwise disjoint.
- $A=A_1 \bigcup  A_2 \bigcup  … \bigcup  A_n$

# 4. Functions

## 4.1 Definition of functions

A **function** maps elements from one set $X$ to elements of another set $Y$.

If f maps an element of the domain to zero elements or more than one element of the target, then f is not well-defined.

### Function equality

Two functions, $f$ and $g$, are equal if $f$ and $g$ have the same domain and target, and $f(x) = g(x)$ for every element $x$ in the domain. The notation $f=g$ is used to denote the fact that functions $f$ and $g$ are equal.

## 4.2 Properties of functions

A function $f:X \to Y$ is one-to-one or **injective** if $x1 \neq x2$ implies that $f(x1) \neq f(x2)$. That is, f maps different elements in $X$ to different elements in $Y$.

A function $f:X \to Y$ is onto or **surjective** if the range of $f$ is equal to the target $Y$. That is, for every $y \in Y$, there is an $x \in X$ such that $f(x) = y$.

A function is **bijective** if it is both one-to-one and onto. A bijective function is called a bijection. A bijection is also called a one-to-one correspondence.

### Relative sizes of the domain and target from function properties.

- If $f:D \to T$ is onto, then for every element in the target, there is at least one element in the domain: $|D|≥|T|$.
- If $f:D \to T$ is one-to-one, then every element in the domain maps to a unique element in the target: $|D|≤|T|$.
- If $f:D \to T$ is a bijection, then $f$ is one-to-one and onto: $|D|≤|T|$ and $|D|≥|T|$, which implies that $|D|=|T|$.

## 4.3 The inverse of a function

If a function $f: X \to Y$ is a `bijection`, then the **inverse** of $f$ is obtained by exchanging the first and second entries in each pair in $f$. the inverse of $f$ is denoted by $f^{-1}$

$$
f^{-1} = \{ (y, x) : (x, y)  \in  f \}
$$

Reversing each pair in a function f does not always result in a well-defined function. Therefore, some functions do not have an inverse.

**A function f has an inverse if and only if f is a bijection.**

## 4.4 Composition of functions

The process of applying a function to the result of another function is called composition.

$f$ and $g$ are two functions, where $f:X \to Y$ and $g:Y \to Z$. The composition of g with f, denoted $g \circ f$, is the function $(g \circ f):X \to Z$, such that for all $x \in X$, $(g \circ f)(x)=g(f(x))$.

It is possible to compose more than two functions. Composition is associative, so the order in which one composes the functions does not matter:

$$
f \circ g \circ h=(f \circ g) \circ h=f \circ (g \circ h)=f(g(h(x)))
$$

The identity function always maps a set onto itself and maps every element onto itself.

$$
\text{Let }f:A \to B \text{ be a bijection. Then }f^{-1} \circ f=I_{A}\text{ and }f \circ f^{-1}=I_B.
$$

# 5. Introduction to Counting

## 5.1 Sum and product rules
### Introduction to counting ###

In discrete mathematics the goal is to count the number of elements in (or the _cardinality_ of) a finite set given a description of the set. Determining a set's cardinality often requires exploiting some mathematical structure of the set.

A bakery sells 6 different varieties of cupcakes (chocolate, vanilla, red velvet, etc.) Haw many ways are there to fill a box with 24 cupcakes from the 6 varieties? The answer is 118,755. 

### The Product rule ###

The **product rule** provides a way to count sequences. While sequence may not seem like a particularly common type of object to count, many sets can be expressed as sets of sequences. 

Let $A_{1},A_{2},\dots,A_{n}$ be finite sets. Then,
$$
|A_{1} \times A_{2} \times A_{3} \times \dots \times A_{n}| = |A_{1}| \cdot |A_{2}| \cdot \dots \cdot |A_{n}|
$$
### Counting strings ###

If $\Sigma$ is a set of characters (called an **alphabet**) then $\Sigma^{n}$ is the set of all strings of length $n$ whose characters come from the set $\Sigma$. For example, if $\Sigma = \{0, 1\}$, then $\Sigma^{6}$ is the set of all binary strings with 6 bits. 

The product rule can also be used to determine the number of strings in a set when one or more of the characters are restricted. Define $S$ to be the set of binary strings of length 5 that start and end with 0. A string is in the set $S$ if it has the form 0\∗\∗\∗0, where each ∗ could be a 0 or a 1.

$$
|S| = \big| \{ 0 \} \times  \{ 0, 1 \} \times \{ 0, 1 \} \times \{ 0, 1\} \times  \{ 0\} \big| = 1 \cdot 2 \cdot 2 \cdot 2 \cdot 1 = 8
$$
### The Sum Rule ###

The **sum rule** is applied when there are multiple choices but only one selection is made. 

Consider $n$ sets, $A_1,A_2,...,A_n$. If the sets are pairwise disjoint (which means that $A_i \bigcap A_{j} = \emptyset$ for $i \neq j$), then

$$
|A_{1} \bigcup A_{2} \bigcup \dots \bigcup A_{n}| = |A_{1}| + |A_{2}| + \dots + |A_{n}| 
$$

### Counting passwords: product and sum rule in combination 

Consider a system in which a password must be a string of length between 6 and 8. The characters can by any lower case letter or digit.

Let $L$ be the set of all lower case letter and $D$ be the set of digits. $|L|=26$ and $|D|=10$. The set of all allowed characters is $C = L \bigcup D$, the sum rule can be applied to find the cardinality of $C: |C| = 25 + 10 = 36$.

Let $A_j$ denote the strings of length $j$ over the alphabet $C$. By the product rule, $|A_j| = 36^{j}$. Notice that for that two values $j$ and $k$ where $j \neq k$, $A_{j}$ and $A_{k}$ are disjoint because a strong cannot have length $j$ and length $k$ at the same time. If a user must select a password of length 6 or 7 or 8, then the sum rule applies:

$$ 
|A_{6} \bigcup A_{7} \bigcup A_{8}| = |A_{6}| + |A_{7}| + |A_{8}| = 36^{6} + 36^{7} + 36^{8}
$$

## 5.2 The bijection rule

One way to approach a difficult counting problem is to show that the cardinality of the set to be counted is equal to the cardinality of a set that is easy to count. The **bijection rule** says that if there is a bijection from one set to another then the two sets have the same cardinality.

### The $k$-to-1 rule ###

Applying the $k$-to-1 rule requires a well defined function from objects we can count to objects we would like to count. In the example with the shoes, the function maps each show to the kid who owns it.

Let $X$ and $Y$ be finite sets. The function $f: X \to Y$ is a **$k$-to-1 correspondence** if every $y \in Y$, there are exactly $k$ different $x \in X$ such that $f(x) = y$

## 5.3 The generalized product rule

The **generalized product rule** says that in selecting an item from a set, if the number of choices at each step does not depend on previous choices made, then the number of items in the set is the product of the number of choices in each step.

### Definition  

Consider a set $S$ of sequences of $k$ items. Suppose there are:

- $n_{1}$ choices for the first item.
- For every possible choice for the first item, there are $n_{2}$ choices for the second item.
- For every possible choice for the first and second items, there are $n_{3}$ choices for the third item.
- For every possible choice for the first $k−1$ items, there are $n^{k}$ choices for the $K^{th}$ item.

Then $|S|=n_{1} \cdot n_{2} \cdot \dots n_{k}$

## 5.4 Counting permutations

One of the most common applications of the general product rules is in counting permutations. An $r$-permutation is a sequence of $r$ items with no repetitions, all taken the same set. Consider the set $X = \{\text{John}, \text{Paul}, \text{George}, \text{Ringo}\}$. The sequences $(\text{Paul}, \text{Ringo}, \text{John})$ and $(\text{Paul}, \text{George}, \text{Paul})$ are both examples of $3$-permutations over $X$. IN a sequence, order matters, so the sequence $(\text{Paul}, \text{Ringo}, \text{John})$ is different from the sequence $(\text{Ringo}, \text{Paul}, \text{John})$. 

A **permutation** (without the parameter r) is a sequence that contains each element of a finite set exactly once. For example, the set {a,b,c} has six permutations.

The number of permutations of a finite set with n elements is $P(n,n) = n * (n - 1) * \dots * 2 * 1 = n!$

### The number of $r$-permutations from a set with $n$ elements

Let $r$ and $n$ be positive integers with $r \leq n$. The numbers of $r$-permutations from a set with $n$ elements is denoted by $P(n,r)$:

$$
\begin{aligned}
P(n,r) = \frac{n!}{(n - r)!} \\
= n(n - 1) \dots  (n - r + 1) (n -r) (n-r-1) \\
= n(n - 1) \dots (n-r+1)
\end{aligned}
$$

## 5.5 Counting subsets

An $r$-subset is sometimes referred to as an **r-combination**. The counting rules for sequences and subsets are commonly referred to as "permutations and combinations". The term "combination" in the context of counting is another word for "subset".

The number of ways of selecting an $r$-subset from a set of size $n$ is:

$$
{n \choose r} = \frac{n!}{r!(n - r)!}
$$

$n \choose r$ is read as "n choose r". The notation $C(n, r)$ is sometimes used for $n \choose r$. 

### Counting binary string with a fixed number of 1's

The idea used to count subsets of a particular size can also be used to count binary string with a particular number of 1's. By counting the number of 5-bit string that have exactly two 1's by showing a bijection between the string to be counted the number of 2-subsets 

## 5.6 Subsets and permutation examples

## 5.7 Counting by complement

## 5.8 Permutations with repetitions 

# References
- [[NYU Tandon Bridge]]
